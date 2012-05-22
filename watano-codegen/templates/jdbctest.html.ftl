<#import "/ftl/jdbc.inc.ftl" as jdbc>
<#assign DefaultDataSource=DataSource(
	'com.mysql.jdbc.Driver',
	'jdbc:mysql://127.0.0.1:3306/dlhjpos',
	'watano',
	'PKhGapCqCBfUbP3BIrlu') />

[${ExecSql(DefaultDataSource, "update roler set fullname='董事长111' where Itemid=0;")}]
<@jdbc.renderSql2Table ds=DefaultDataSource >
select * from roler;
</@jdbc.renderSql2Table>
[${ExecSql(DefaultDataSource, "update roler set fullname='董事长' where Itemid=0;")}]
<@jdbc.renderSql2Table ds=DefaultDataSource >
select * from roler;
</@jdbc.renderSql2Table>
