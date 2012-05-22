<#import "/ftl/birt.inc.ftl" as birt>
<@birt.reportxml>
<data-sources>
	<#assign dsName='ds1' />
	<#assign dsBeforeOpen>
	importPackage( Packages.java.io );
	importPackage( Packages.java.util );

	extensionProperties.odaDriverClass=new String(params["dbdriver"]);//驱动名称
	extensionProperties.odaURL = new String(params["url"]);//设置url
	extensionProperties.odaUser = new String(params["username"]);//设置用户名
	extensionProperties.odaPassword = new String(params["password"]);//设置密码</#assign>
	<@birt.datasource  name=dsName id=birt.rpt_id() beforeOpen=dsBeforeOpen
		odaDriverClass='org.postgresql.Driver'
		odaURL='jdbc:postgresql://localhost/cgytest' odaUser='postgres' odaPassword='ZXlqbGh5M2x4' />
</data-sources>

<data-sets>
	<#assign odaBeforeOpen>this.queryText = this.queryText.replace('__strYear__',params["strYear"]).replace('__orgids__',params["orgids"]);</#assign>
	<@birt.odaDataSet  name="dy" id=birt.rpt_id()  dataSource=dsName beforeOpen=odaBeforeOpen
		cols=[
			['上年底总数','上年底总数','decimal'],
			['本年内增加','本年内增加','decimal'],
			['发展党员','发展党员','decimal'],
			['恢复党籍','恢复党籍','decimal'],
			['转入组织关系','转入组织关系','decimal'],
			['本年内减少','本年内减少','decimal'],
			['出党','出党','decimal'],
			['停止党籍','停止党籍','decimal'],
			['死亡','死亡','decimal'],
			['转出组织关系','转出组织关系','decimal'],
			['本年底应有数','本年底应有数','decimal'],
			['本年底实有数','本年底实有数','decimal'],
			['实有数与应有数之差','实有数与应有数之差','decimal']]>
select
count(dynd.id) as "上年底总数",
(count(hfdj.id)+count(fzdy.id)+count(lzb_in.id)) as "本年内增加",
count(fzdy.id) as "发展党员", count(hfdj.id) as "恢复党籍", count(lzb_in.id) as "转入组织关系",
(count(cd.id)+count(tzdj.id)+count(dead.id)+count(lzb_out.id)) as "本年内减少",
count(cd.id) as "出党",
count(tzdj.id) as "停止党籍",
count(dead.id) as "死亡",
count(lzb_out.id) as "转出组织关系",
(count(dynd.id)+(count(hfdj.id)+count(fzdy.id)+count(lzb_in.id))-(count(cd.id)+count(tzdj.id)+count(dead.id)+count(lzb_out.id))) as "本年底应有数",
count(dy.id) as "本年底实有数",
(count(dy.id)-(count(dynd.id)+(count(hfdj.id)+count(fzdy.id)+count(lzb_in.id))-(count(cd.id)+count(tzdj.id)+count(dead.id)+count(lzb_out.id)))) as "实有数与应有数之差"
from ext_dq_dangyuan dy
left join ext_dq_dyhfdj hfdj on (dy.id=hfdj.dyid and hfdj.hfdj_time>='__strYear__-01-01' and hfdj.hfdj_time<='__strYear__-06-30')
left join ext_dq_dydead dead on (dy.id=dead.dyid and dead.dead_time>='__strYear__-01-01' and dead.dead_time<='__strYear__-06-30')
left join ext_dq_dytzdj tzdj on (dy.id=tzdj.dyid and tzdj.tzdj_time>='__strYear__-01-01' and tzdj.tzdj_time<='__strYear__-06-30')
left join ext_dq_dycd cd on (dy.id=cd.dyid and cd.cd_time>='__strYear__-01-01' and cd.cd_time<='__strYear__-06-30')
left join ext_dq_dylzb lzb_in on (dy.id=lzb_in.dyid and (lzb_in.zr_type='3' or lzb_in.lr_type='7') and lzb_in.js_time>='__strYear__-01-01' and lzb_in.js_time<='__strYear__-06-30' and lzb_in.js_orgnizationid in (__orgids__))
left join ext_dq_dylzb lzb_out on (dy.id=lzb_out.dyid and (lzb_out.zc_type='1' or lzb_out.lr_type='5') and lzb_out.zc_time>='__strYear__-01-01' and lzb_out.zc_time<='__strYear__-06-30' and lzb_out.zc_orgnizationid in (__orgids__))
left join ext_dq_dangyuan fzdy on (dy.id=fzdy.id and ((fzdy.rdtime>='__strYear__-01-01' and fzdy.rdTime<='__strYear__-06-30') or fzdy.rdTime is null))
left join ext_dq_dangyuan dynd on (dy.id=dynd.id and (dynd.rdtime<'__strYear__-01-01'))
where (dy.dystatus like '0' or dy.dystatus like '' or dy.dystatus is null)
and dy.dysort in ('0','1')
and dy.organizationid in (__orgids__)</@birt.odaDataSet>
</data-sets>
<@birt.styles />
<body>
	<@birt.grid cols=6 dataSet='dy' boundDataColumns=[
			['上年底总数','上年底总数','decimal'],
			['本年内增加','本年内增加','decimal'],
			['发展党员','发展党员','decimal'],
			['恢复党籍','恢复党籍','decimal'],
			['转入组织关系','转入组织关系','decimal'],
			['本年内减少','本年内减少','decimal'],
			['出党','出党','decimal'],
			['停止党籍','停止党籍','decimal'],
			['死亡','死亡','decimal'],
			['转出组织关系','转出组织关系','decimal'],
			['本年底应有数','本年底应有数','decimal'],
			['本年底实有数','本年底实有数','decimal'],
			['实有数与应有数之差','实有数与应有数之差','decimal'],
			['$填报单位','"填报单位："+params["orgname"]','string'],
			['$起止时间','"起止时间："+params["strYear"]+"年1月1日至"+params["strYear"]+"年6月30日"','string']
			]
			colwidths=['25%','10%','15%','25%','10%','15%']
			>
		<@birt.cell />
		<@birt.cell colSpan=4>
			<@birt.text text='党 员 数 综 合 比 较' textAlign='center' fontWeight='bold'/>
		</@birt.cell>
		<@birt.cell />

		<@birt.cell><@birt.data col='填报单位'/></@birt.cell>
		<@birt.cell colSpan=4><@birt.data col='起止时间'/></@birt.cell>
		<@birt.cell><@birt.text text='第一表' textAlign='right'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='项目' textAlign='center'/></@birt.cell>
		<@birt.cell border=true colSpan=2><@birt.text text='人数' textAlign='center'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='项目' textAlign='center'/></@birt.cell>
		<@birt.cell border=true colSpan=2><@birt.text text='人数' textAlign='center'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='甲' /></@birt.cell>
		<@birt.cell border=true colSpan=2><@birt.text text='A' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='甲' /></@birt.cell>
		<@birt.cell border=true colSpan=2><@birt.text text='A' /></@birt.cell>

		<@birt.cell border=true><@birt.text text='一、上 年 底 总 数' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='1' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='上年底总数'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='停 止 党 籍' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='8' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='停止党籍'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='二、本 年 内 增 加' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='2' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='本年内增加'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='死 亡' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='9' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='死亡'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='发 展 党 员' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='3' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='发展党员'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='转 出 组 织 关 系' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='10' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='转出组织关系'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='恢 复 党 籍' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='4' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='恢复党籍'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='四、本 年 底 应 有 数' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='11' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='本年底应有数'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='转 入 组 织 关 系' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='5' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='转入组织关系'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='五、本 年 底 实 有 数' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='12' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='本年底实有数'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='三、本 年 内 减 少' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='6' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='本年内减少'/></@birt.cell>
		<@birt.cell border=true><@birt.text text='六、实有数与应有数之差' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='13' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='实有数与应有数之差'/></@birt.cell>

		<@birt.cell border=true><@birt.text text='出 党' /></@birt.cell>
		<@birt.cell border=true><@birt.text text='7' /></@birt.cell>
		<@birt.cell border=true><@birt.data col='出党'/></@birt.cell>
		<@birt.cell border=true colSpan=3 />

		<@birt.cell colSpan=6 />

		<@birt.cell colSpan=5 />
		<@birt.cell><@birt.printbtn /></@birt.cell>
	</@birt.grid>
</body>
</@birt.reportxml>
