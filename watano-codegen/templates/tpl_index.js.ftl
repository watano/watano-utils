






<#assign tpl_ndqx>


<table border="0" cellpadding="0" cellspacing="0" class="pisoft-zhib-inner-tab02">
	<!-- <caption><b>设备缺陷统计(统计时间：{[values[7].ndqx_gsmc]})</b></caption> -->
	<tr class="pisoft-zhib-inner-tab02-title">
		<td rowspan="2" style="width:16%;">单位名称</td>

		<td colspan="3" style="width:21%;">第一季度</td>
		<td colspan="3" style="width:21%;">第二季度</td>
		<td colspan="3" style="width:21%;">第三季度</td>
		<td colspan="3" style="width:21%;">第四季度</td>
	</tr>
	<tr class="pisoft-zhib-inner-tab02-title">
		<td class="red">紧急</td>

		<td class="blue">重大</td>
		<td>合计</td>

		<td class="red">紧急</td>
		<td class="blue">重大</td>
		<td>合计</td>

		<td class="red">紧急</td>
		<td class="blue">重大</td>
		<td>合计</td>

		<td class="red">紧急</td>
		<td class="blue">重大</td>
		<td>合计</td>

	</tr>

	<tr >
		<td>{[values[0].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[0].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[0].ndqx_dwdm]}', '紧急');">{[values[0].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[0].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[0].ndqx_dwdm]}', '重大');">{[values[0].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[0].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[0].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[0].ndqx_dwdm]}', '');">{[values[0].ndqx_jd1_qx]}</a></tpl><tpl if="values[0].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[0].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[0].ndqx_dwdm]}', '紧急');">{[values[0].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[0].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[0].ndqx_dwdm]}', '重大');">{[values[0].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[0].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[0].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[0].ndqx_dwdm]}', '');">{[values[0].ndqx_jd2_qx]}</a></tpl><tpl if="values[0].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[0].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[0].ndqx_dwdm]}', '紧急');">{[values[0].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[0].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[0].ndqx_dwdm]}', '重大');">{[values[0].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[0].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[0].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[0].ndqx_dwdm]}', '');">{[values[0].ndqx_jd3_qx]}</a></tpl><tpl if="values[0].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[0].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[0].ndqx_dwdm]}', '紧急');">{[values[0].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[0].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[0].ndqx_dwdm]}', '重大');">{[values[0].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[0].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[0].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[0].ndqx_dwdm]}', '');">{[values[0].ndqx_jd4_qx]}</a></tpl><tpl if="values[0].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[1].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[1].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[1].ndqx_dwdm]}', '紧急');">{[values[1].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[1].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[1].ndqx_dwdm]}', '重大');">{[values[1].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[1].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[1].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[1].ndqx_dwdm]}', '');">{[values[1].ndqx_jd1_qx]}</a></tpl><tpl if="values[1].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[1].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[1].ndqx_dwdm]}', '紧急');">{[values[1].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[1].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[1].ndqx_dwdm]}', '重大');">{[values[1].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[1].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[1].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[1].ndqx_dwdm]}', '');">{[values[1].ndqx_jd2_qx]}</a></tpl><tpl if="values[1].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[1].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[1].ndqx_dwdm]}', '紧急');">{[values[1].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[1].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[1].ndqx_dwdm]}', '重大');">{[values[1].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[1].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[1].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[1].ndqx_dwdm]}', '');">{[values[1].ndqx_jd3_qx]}</a></tpl><tpl if="values[1].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[1].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[1].ndqx_dwdm]}', '紧急');">{[values[1].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[1].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[1].ndqx_dwdm]}', '重大');">{[values[1].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[1].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[1].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[1].ndqx_dwdm]}', '');">{[values[1].ndqx_jd4_qx]}</a></tpl><tpl if="values[1].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[2].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[2].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[2].ndqx_dwdm]}', '紧急');">{[values[2].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[2].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[2].ndqx_dwdm]}', '重大');">{[values[2].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[2].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[2].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[2].ndqx_dwdm]}', '');">{[values[2].ndqx_jd1_qx]}</a></tpl><tpl if="values[2].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[2].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[2].ndqx_dwdm]}', '紧急');">{[values[2].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[2].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[2].ndqx_dwdm]}', '重大');">{[values[2].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[2].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[2].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[2].ndqx_dwdm]}', '');">{[values[2].ndqx_jd2_qx]}</a></tpl><tpl if="values[2].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[2].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[2].ndqx_dwdm]}', '紧急');">{[values[2].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[2].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[2].ndqx_dwdm]}', '重大');">{[values[2].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[2].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[2].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[2].ndqx_dwdm]}', '');">{[values[2].ndqx_jd3_qx]}</a></tpl><tpl if="values[2].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[2].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[2].ndqx_dwdm]}', '紧急');">{[values[2].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[2].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[2].ndqx_dwdm]}', '重大');">{[values[2].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[2].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[2].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[2].ndqx_dwdm]}', '');">{[values[2].ndqx_jd4_qx]}</a></tpl><tpl if="values[2].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[3].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[3].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[3].ndqx_dwdm]}', '紧急');">{[values[3].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[3].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[3].ndqx_dwdm]}', '重大');">{[values[3].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[3].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[3].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[3].ndqx_dwdm]}', '');">{[values[3].ndqx_jd1_qx]}</a></tpl><tpl if="values[3].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[3].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[3].ndqx_dwdm]}', '紧急');">{[values[3].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[3].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[3].ndqx_dwdm]}', '重大');">{[values[3].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[3].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[3].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[3].ndqx_dwdm]}', '');">{[values[3].ndqx_jd2_qx]}</a></tpl><tpl if="values[3].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[3].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[3].ndqx_dwdm]}', '紧急');">{[values[3].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[3].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[3].ndqx_dwdm]}', '重大');">{[values[3].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[3].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[3].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[3].ndqx_dwdm]}', '');">{[values[3].ndqx_jd3_qx]}</a></tpl><tpl if="values[3].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[3].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[3].ndqx_dwdm]}', '紧急');">{[values[3].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[3].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[3].ndqx_dwdm]}', '重大');">{[values[3].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[3].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[3].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[3].ndqx_dwdm]}', '');">{[values[3].ndqx_jd4_qx]}</a></tpl><tpl if="values[3].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[4].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[4].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[4].ndqx_dwdm]}', '紧急');">{[values[4].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[4].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[4].ndqx_dwdm]}', '重大');">{[values[4].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[4].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[4].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[4].ndqx_dwdm]}', '');">{[values[4].ndqx_jd1_qx]}</a></tpl><tpl if="values[4].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[4].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[4].ndqx_dwdm]}', '紧急');">{[values[4].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[4].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[4].ndqx_dwdm]}', '重大');">{[values[4].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[4].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[4].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[4].ndqx_dwdm]}', '');">{[values[4].ndqx_jd2_qx]}</a></tpl><tpl if="values[4].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[4].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[4].ndqx_dwdm]}', '紧急');">{[values[4].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[4].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[4].ndqx_dwdm]}', '重大');">{[values[4].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[4].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[4].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[4].ndqx_dwdm]}', '');">{[values[4].ndqx_jd3_qx]}</a></tpl><tpl if="values[4].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[4].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[4].ndqx_dwdm]}', '紧急');">{[values[4].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[4].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[4].ndqx_dwdm]}', '重大');">{[values[4].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[4].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[4].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[4].ndqx_dwdm]}', '');">{[values[4].ndqx_jd4_qx]}</a></tpl><tpl if="values[4].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[5].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[5].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[5].ndqx_dwdm]}', '紧急');">{[values[5].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[5].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[5].ndqx_dwdm]}', '重大');">{[values[5].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[5].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[5].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[5].ndqx_dwdm]}', '');">{[values[5].ndqx_jd1_qx]}</a></tpl><tpl if="values[5].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[5].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[5].ndqx_dwdm]}', '紧急');">{[values[5].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[5].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[5].ndqx_dwdm]}', '重大');">{[values[5].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[5].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[5].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[5].ndqx_dwdm]}', '');">{[values[5].ndqx_jd2_qx]}</a></tpl><tpl if="values[5].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[5].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[5].ndqx_dwdm]}', '紧急');">{[values[5].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[5].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[5].ndqx_dwdm]}', '重大');">{[values[5].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[5].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[5].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[5].ndqx_dwdm]}', '');">{[values[5].ndqx_jd3_qx]}</a></tpl><tpl if="values[5].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[5].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[5].ndqx_dwdm]}', '紧急');">{[values[5].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[5].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[5].ndqx_dwdm]}', '重大');">{[values[5].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[5].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[5].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[5].ndqx_dwdm]}', '');">{[values[5].ndqx_jd4_qx]}</a></tpl><tpl if="values[5].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[6].ndqx_gsmc]}</td>

		<td class="red"><tpl if="values[6].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[6].ndqx_dwdm]}', '紧急');">{[values[6].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[6].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[6].ndqx_dwdm]}', '重大');">{[values[6].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[6].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[6].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[6].ndqx_dwdm]}', '');">{[values[6].ndqx_jd1_qx]}</a></tpl><tpl if="values[6].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[6].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[6].ndqx_dwdm]}', '紧急');">{[values[6].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[6].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[6].ndqx_dwdm]}', '重大');">{[values[6].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[6].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[6].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[6].ndqx_dwdm]}', '');">{[values[6].ndqx_jd2_qx]}</a></tpl><tpl if="values[6].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[6].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[6].ndqx_dwdm]}', '紧急');">{[values[6].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[6].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[6].ndqx_dwdm]}', '重大');">{[values[6].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[6].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[6].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[6].ndqx_dwdm]}', '');">{[values[6].ndqx_jd3_qx]}</a></tpl><tpl if="values[6].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[6].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[6].ndqx_dwdm]}', '紧急');">{[values[6].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[6].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[6].ndqx_dwdm]}', '重大');">{[values[6].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[6].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[6].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[6].ndqx_dwdm]}', '');">{[values[6].ndqx_jd4_qx]}</a></tpl><tpl if="values[6].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


	<tr class="total">
		<td>总计</td>

		<td class="red"><tpl if="values[7].ndqx_jd1_jjqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[7].ndqx_dwdm]}', '紧急');">{[values[7].ndqx_jd1_jjqx]}</a></tpl><tpl if="values[7].ndqx_jd1_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndqx_jd1_zdqx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[7].ndqx_dwdm]}', '重大');">{[values[7].ndqx_jd1_zdqx]}</a></tpl><tpl if="values[7].ndqx_jd1_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[7].ndqx_jd1_qx!='0'"><a href="#" onclick="javascript:ndqx(1, '{[values[7].ndqx_dwdm]}', '');">{[values[7].ndqx_jd1_qx]}</a></tpl><tpl if="values[7].ndqx_jd1_qx=='0'">-</tpl></td>


		<td class="red"><tpl if="values[7].ndqx_jd2_jjqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[7].ndqx_dwdm]}', '紧急');">{[values[7].ndqx_jd2_jjqx]}</a></tpl><tpl if="values[7].ndqx_jd2_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndqx_jd2_zdqx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[7].ndqx_dwdm]}', '重大');">{[values[7].ndqx_jd2_zdqx]}</a></tpl><tpl if="values[7].ndqx_jd2_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[7].ndqx_jd2_qx!='0'"><a href="#" onclick="javascript:ndqx(2, '{[values[7].ndqx_dwdm]}', '');">{[values[7].ndqx_jd2_qx]}</a></tpl><tpl if="values[7].ndqx_jd2_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[7].ndqx_jd3_jjqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[7].ndqx_dwdm]}', '紧急');">{[values[7].ndqx_jd3_jjqx]}</a></tpl><tpl if="values[7].ndqx_jd3_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndqx_jd3_zdqx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[7].ndqx_dwdm]}', '重大');">{[values[7].ndqx_jd3_zdqx]}</a></tpl><tpl if="values[7].ndqx_jd3_zdqx=='0'">-</tpl></td>

		<td><tpl if="values[7].ndqx_jd3_qx!='0'"><a href="#" onclick="javascript:ndqx(3, '{[values[7].ndqx_dwdm]}', '');">{[values[7].ndqx_jd3_qx]}</a></tpl><tpl if="values[7].ndqx_jd3_qx=='0'">-</tpl></td>

		<td class="red"><tpl if="values[7].ndqx_jd4_jjqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[7].ndqx_dwdm]}', '紧急');">{[values[7].ndqx_jd4_jjqx]}</a></tpl><tpl if="values[7].ndqx_jd4_jjqx=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndqx_jd4_zdqx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[7].ndqx_dwdm]}', '重大');">{[values[7].ndqx_jd4_zdqx]}</a></tpl><tpl if="values[7].ndqx_jd4_zdqx=='0'">-</tpl></td>
		<td><tpl if="values[7].ndqx_jd4_qx!='0'"><a href="#" onclick="javascript:ndqx(4, '{[values[7].ndqx_dwdm]}', '');">{[values[7].ndqx_jd4_qx]}</a></tpl><tpl if="values[7].ndqx_jd4_qx=='0'">-</tpl></td>

	</tr>


</table>


</#assign>
<#assign tpl_ndjcyj>


<table border="0" cellpadding="0" cellspacing="0" class="pisoft-zhib-inner-tab02">
	<!-- <caption><b> 在线监测预警统计(统计时间：{[values[7].ndjcyj_gsmc]})</b></caption>  -->
	<tr class="pisoft-zhib-inner-tab02-title">
		<td rowspan="2" style="width:16%;">单位名称</td>
		<td colspan="3" style="width:21%;">第一季度</td>

		<td colspan="3" style="width:21%;">第二季度</td>
		<td colspan="3" style="width:21%;">第三季度</td>
		<td colspan="3" style="width:21%;">第四季度</td>
	</tr>
	<tr class="pisoft-zhib-inner-tab02-title">
		<td class="blue">变电</td>
		<td class="blue">输电</td>

		<td class="red">合计</td>

		<td class="blue">变电</td>
		<td class="blue">输电</td>
		<td class="red">合计</td>

		<td class="blue">变电</td>

		<td class="blue">输电</td>
		<td class="red">合计</td>

		<td class="blue">变电</td>
		<td class="blue">输电</td>
		<td class="red">合计</td>
	</tr>


	<tr >
		<td>{[values[0].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[0].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[0].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[0].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[0].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[0].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[0].ndjcyj_dwdm]}', '');">{[values[0].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[0].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[0].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[0].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[0].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[0].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[0].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[0].ndjcyj_dwdm]}', '');">{[values[0].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[0].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[0].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[0].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[0].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[0].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[0].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[0].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[0].ndjcyj_dwdm]}', '');">{[values[0].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[0].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[0].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[0].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[0].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[0].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[0].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[0].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[0].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[0].ndjcyj_dwdm]}', '');">{[values[0].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[0].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[1].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[1].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[1].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[1].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[1].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[1].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[1].ndjcyj_dwdm]}', '');">{[values[1].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[1].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[1].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[1].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[1].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[1].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[1].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[1].ndjcyj_dwdm]}', '');">{[values[1].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[1].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[1].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[1].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[1].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[1].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[1].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[1].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[1].ndjcyj_dwdm]}', '');">{[values[1].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[1].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[1].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[1].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[1].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[1].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[1].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[1].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[1].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[1].ndjcyj_dwdm]}', '');">{[values[1].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[1].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[2].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[2].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[2].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[2].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[2].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[2].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[2].ndjcyj_dwdm]}', '');">{[values[2].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[2].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[2].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[2].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[2].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[2].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[2].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[2].ndjcyj_dwdm]}', '');">{[values[2].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[2].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[2].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[2].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[2].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[2].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[2].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[2].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[2].ndjcyj_dwdm]}', '');">{[values[2].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[2].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[2].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[2].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[2].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[2].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[2].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[2].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[2].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[2].ndjcyj_dwdm]}', '');">{[values[2].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[2].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[3].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[3].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[3].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[3].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[3].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[3].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[3].ndjcyj_dwdm]}', '');">{[values[3].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[3].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[3].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[3].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[3].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[3].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[3].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[3].ndjcyj_dwdm]}', '');">{[values[3].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[3].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[3].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[3].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[3].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[3].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[3].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[3].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[3].ndjcyj_dwdm]}', '');">{[values[3].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[3].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[3].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[3].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[3].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[3].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[3].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[3].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[3].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[3].ndjcyj_dwdm]}', '');">{[values[3].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[3].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[4].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[4].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[4].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[4].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[4].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[4].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[4].ndjcyj_dwdm]}', '');">{[values[4].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[4].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[4].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[4].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[4].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[4].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[4].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[4].ndjcyj_dwdm]}', '');">{[values[4].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[4].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[4].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[4].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[4].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[4].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[4].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[4].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[4].ndjcyj_dwdm]}', '');">{[values[4].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[4].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[4].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[4].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[4].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[4].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[4].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[4].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[4].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[4].ndjcyj_dwdm]}', '');">{[values[4].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[4].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[5].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[5].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[5].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[5].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[5].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[5].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[5].ndjcyj_dwdm]}', '');">{[values[5].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[5].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[5].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[5].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[5].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[5].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[5].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[5].ndjcyj_dwdm]}', '');">{[values[5].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[5].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[5].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[5].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[5].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[5].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[5].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[5].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[5].ndjcyj_dwdm]}', '');">{[values[5].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[5].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[5].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[5].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[5].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[5].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[5].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[5].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[5].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[5].ndjcyj_dwdm]}', '');">{[values[5].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[5].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[6].ndjcyj_gsmc]}</td>

		<td class="blue"><tpl if="values[6].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[6].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[6].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[6].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[6].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[6].ndjcyj_dwdm]}', '');">{[values[6].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[6].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[6].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[6].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[6].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[6].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[6].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[6].ndjcyj_dwdm]}', '');">{[values[6].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[6].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[6].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[6].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[6].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[6].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[6].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[6].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[6].ndjcyj_dwdm]}', '');">{[values[6].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[6].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[6].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[6].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[6].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[6].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[6].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[6].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[6].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[6].ndjcyj_dwdm]}', '');">{[values[6].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[6].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


	<tr class="total">
		<td>总计</td>

		<td class="blue"><tpl if="values[7].ndjcyj_jd1_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[7].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[7].ndjcyj_jd1_bdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd1_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndjcyj_jd1_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[7].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[7].ndjcyj_jd1_sdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd1_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndjcyj_jd1_yj!='0'"><a href="#" onclick="javascript:ndjcyj(1, '{[values[7].ndjcyj_dwdm]}', '');">{[values[7].ndjcyj_jd1_yj]}</a></tpl><tpl if="values[7].ndjcyj_jd1_yj=='0'">-</tpl></td>


		<td class="blue"><tpl if="values[7].ndjcyj_jd2_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[7].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[7].ndjcyj_jd2_bdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd2_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndjcyj_jd2_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[7].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[7].ndjcyj_jd2_sdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd2_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndjcyj_jd2_yj!='0'"><a href="#" onclick="javascript:ndjcyj(2, '{[values[7].ndjcyj_dwdm]}', '');">{[values[7].ndjcyj_jd2_yj]}</a></tpl><tpl if="values[7].ndjcyj_jd2_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[7].ndjcyj_jd3_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[7].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[7].ndjcyj_jd3_bdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd3_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndjcyj_jd3_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[7].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[7].ndjcyj_jd3_sdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd3_sdyj=='0'">-</tpl></td>

		<td class="red"><tpl if="values[7].ndjcyj_jd3_yj!='0'"><a href="#" onclick="javascript:ndjcyj(3, '{[values[7].ndjcyj_dwdm]}', '');">{[values[7].ndjcyj_jd3_yj]}</a></tpl><tpl if="values[7].ndjcyj_jd3_yj=='0'">-</tpl></td>

		<td class="blue"><tpl if="values[7].ndjcyj_jd4_bdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[7].ndjcyj_dwdm]}', 'YJ_BDYJ');">{[values[7].ndjcyj_jd4_bdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd4_bdyj=='0'">-</tpl></td>
		<td class="blue"><tpl if="values[7].ndjcyj_jd4_sdyj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[7].ndjcyj_dwdm]}', 'YJ_SDYJ');">{[values[7].ndjcyj_jd4_sdyj]}</a></tpl><tpl if="values[7].ndjcyj_jd4_sdyj=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndjcyj_jd4_yj!='0'"><a href="#" onclick="javascript:ndjcyj(4, '{[values[7].ndjcyj_dwdm]}', '');">{[values[7].ndjcyj_jd4_yj]}</a></tpl><tpl if="values[7].ndjcyj_jd4_yj=='0'">-</tpl></td>

	</tr>


</table>


</#assign>
<#assign tpl_ndsy>


<table border="0" cellpadding="0" cellspacing="0" class="pisoft-zhib-inner-tab02">
	<!-- <caption><b>试验情况统计(统计时间：{[values[7].ndsy_gsmc]})</b></caption>  -->
	<tr class="pisoft-zhib-inner-tab02-title">
		<td rowspan="2" style="width:16%;">单位名称</td>
		<td colspan="3" style="width:21%;">第一季度</td>

		<td colspan="3" style="width:21%;">第二季度</td>
		<td colspan="3" style="width:21%;">第三季度</td>
		<td colspan="3" style="width:21%;">第四季度</td>
	</tr>
	<tr class="pisoft-zhib-inner-tab02-title">
		<td class="green">正常</td>
		<td class="red">异常</td>

		<td>合计</td>

		<td class="green">正常</td>
		<td class="red">异常</td>
		<td>合计</td>

		<td class="green">正常</td>

		<td class="red">异常</td>
		<td>合计</td>

		<td class="green">正常</td>
		<td class="red">异常</td>
		<td>合计</td>
	</tr>


	<tr >
		<td>{[values[0].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[0].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[0].ndsy_dwdm]}', 'y');">{[values[0].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[0].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[0].ndsy_dwdm]}', 'n');">{[values[0].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[0].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[0].ndsy_dwdm]}', '');">{[values[0].ndsy_jd1_sy]}</a></tpl><tpl if="values[0].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[0].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[0].ndsy_dwdm]}', 'y');">{[values[0].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[0].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[0].ndsy_dwdm]}', 'n');">{[values[0].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[0].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[0].ndsy_dwdm]}', '');">{[values[0].ndsy_jd2_sy]}</a></tpl><tpl if="values[0].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[0].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[0].ndsy_dwdm]}', 'y');">{[values[0].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[0].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[0].ndsy_dwdm]}', 'n');">{[values[0].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[0].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[0].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[0].ndsy_dwdm]}', '');">{[values[0].ndsy_jd3_sy]}</a></tpl><tpl if="values[0].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[0].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[0].ndsy_dwdm]}', 'y');">{[values[0].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[0].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[0].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[0].ndsy_dwdm]}', 'n');">{[values[0].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[0].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[0].ndsy_dwdm]}', '');">{[values[0].ndsy_jd4_sy]}</a></tpl><tpl if="values[0].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[1].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[1].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[1].ndsy_dwdm]}', 'y');">{[values[1].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[1].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[1].ndsy_dwdm]}', 'n');">{[values[1].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[1].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[1].ndsy_dwdm]}', '');">{[values[1].ndsy_jd1_sy]}</a></tpl><tpl if="values[1].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[1].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[1].ndsy_dwdm]}', 'y');">{[values[1].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[1].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[1].ndsy_dwdm]}', 'n');">{[values[1].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[1].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[1].ndsy_dwdm]}', '');">{[values[1].ndsy_jd2_sy]}</a></tpl><tpl if="values[1].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[1].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[1].ndsy_dwdm]}', 'y');">{[values[1].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[1].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[1].ndsy_dwdm]}', 'n');">{[values[1].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[1].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[1].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[1].ndsy_dwdm]}', '');">{[values[1].ndsy_jd3_sy]}</a></tpl><tpl if="values[1].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[1].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[1].ndsy_dwdm]}', 'y');">{[values[1].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[1].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[1].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[1].ndsy_dwdm]}', 'n');">{[values[1].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[1].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[1].ndsy_dwdm]}', '');">{[values[1].ndsy_jd4_sy]}</a></tpl><tpl if="values[1].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[2].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[2].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[2].ndsy_dwdm]}', 'y');">{[values[2].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[2].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[2].ndsy_dwdm]}', 'n');">{[values[2].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[2].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[2].ndsy_dwdm]}', '');">{[values[2].ndsy_jd1_sy]}</a></tpl><tpl if="values[2].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[2].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[2].ndsy_dwdm]}', 'y');">{[values[2].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[2].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[2].ndsy_dwdm]}', 'n');">{[values[2].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[2].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[2].ndsy_dwdm]}', '');">{[values[2].ndsy_jd2_sy]}</a></tpl><tpl if="values[2].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[2].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[2].ndsy_dwdm]}', 'y');">{[values[2].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[2].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[2].ndsy_dwdm]}', 'n');">{[values[2].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[2].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[2].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[2].ndsy_dwdm]}', '');">{[values[2].ndsy_jd3_sy]}</a></tpl><tpl if="values[2].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[2].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[2].ndsy_dwdm]}', 'y');">{[values[2].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[2].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[2].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[2].ndsy_dwdm]}', 'n');">{[values[2].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[2].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[2].ndsy_dwdm]}', '');">{[values[2].ndsy_jd4_sy]}</a></tpl><tpl if="values[2].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[3].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[3].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[3].ndsy_dwdm]}', 'y');">{[values[3].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[3].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[3].ndsy_dwdm]}', 'n');">{[values[3].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[3].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[3].ndsy_dwdm]}', '');">{[values[3].ndsy_jd1_sy]}</a></tpl><tpl if="values[3].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[3].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[3].ndsy_dwdm]}', 'y');">{[values[3].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[3].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[3].ndsy_dwdm]}', 'n');">{[values[3].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[3].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[3].ndsy_dwdm]}', '');">{[values[3].ndsy_jd2_sy]}</a></tpl><tpl if="values[3].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[3].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[3].ndsy_dwdm]}', 'y');">{[values[3].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[3].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[3].ndsy_dwdm]}', 'n');">{[values[3].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[3].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[3].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[3].ndsy_dwdm]}', '');">{[values[3].ndsy_jd3_sy]}</a></tpl><tpl if="values[3].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[3].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[3].ndsy_dwdm]}', 'y');">{[values[3].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[3].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[3].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[3].ndsy_dwdm]}', 'n');">{[values[3].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[3].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[3].ndsy_dwdm]}', '');">{[values[3].ndsy_jd4_sy]}</a></tpl><tpl if="values[3].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[4].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[4].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[4].ndsy_dwdm]}', 'y');">{[values[4].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[4].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[4].ndsy_dwdm]}', 'n');">{[values[4].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[4].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[4].ndsy_dwdm]}', '');">{[values[4].ndsy_jd1_sy]}</a></tpl><tpl if="values[4].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[4].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[4].ndsy_dwdm]}', 'y');">{[values[4].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[4].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[4].ndsy_dwdm]}', 'n');">{[values[4].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[4].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[4].ndsy_dwdm]}', '');">{[values[4].ndsy_jd2_sy]}</a></tpl><tpl if="values[4].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[4].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[4].ndsy_dwdm]}', 'y');">{[values[4].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[4].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[4].ndsy_dwdm]}', 'n');">{[values[4].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[4].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[4].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[4].ndsy_dwdm]}', '');">{[values[4].ndsy_jd3_sy]}</a></tpl><tpl if="values[4].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[4].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[4].ndsy_dwdm]}', 'y');">{[values[4].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[4].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[4].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[4].ndsy_dwdm]}', 'n');">{[values[4].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[4].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[4].ndsy_dwdm]}', '');">{[values[4].ndsy_jd4_sy]}</a></tpl><tpl if="values[4].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[5].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[5].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[5].ndsy_dwdm]}', 'y');">{[values[5].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[5].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[5].ndsy_dwdm]}', 'n');">{[values[5].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[5].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[5].ndsy_dwdm]}', '');">{[values[5].ndsy_jd1_sy]}</a></tpl><tpl if="values[5].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[5].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[5].ndsy_dwdm]}', 'y');">{[values[5].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[5].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[5].ndsy_dwdm]}', 'n');">{[values[5].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[5].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[5].ndsy_dwdm]}', '');">{[values[5].ndsy_jd2_sy]}</a></tpl><tpl if="values[5].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[5].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[5].ndsy_dwdm]}', 'y');">{[values[5].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[5].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[5].ndsy_dwdm]}', 'n');">{[values[5].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[5].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[5].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[5].ndsy_dwdm]}', '');">{[values[5].ndsy_jd3_sy]}</a></tpl><tpl if="values[5].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[5].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[5].ndsy_dwdm]}', 'y');">{[values[5].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[5].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[5].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[5].ndsy_dwdm]}', 'n');">{[values[5].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[5].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[5].ndsy_dwdm]}', '');">{[values[5].ndsy_jd4_sy]}</a></tpl><tpl if="values[5].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr >
		<td>{[values[6].ndsy_gsmc]}</td>

		<td class="green"><tpl if="values[6].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[6].ndsy_dwdm]}', 'y');">{[values[6].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[6].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[6].ndsy_dwdm]}', 'n');">{[values[6].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[6].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[6].ndsy_dwdm]}', '');">{[values[6].ndsy_jd1_sy]}</a></tpl><tpl if="values[6].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[6].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[6].ndsy_dwdm]}', 'y');">{[values[6].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[6].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[6].ndsy_dwdm]}', 'n');">{[values[6].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[6].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[6].ndsy_dwdm]}', '');">{[values[6].ndsy_jd2_sy]}</a></tpl><tpl if="values[6].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[6].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[6].ndsy_dwdm]}', 'y');">{[values[6].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[6].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[6].ndsy_dwdm]}', 'n');">{[values[6].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[6].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[6].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[6].ndsy_dwdm]}', '');">{[values[6].ndsy_jd3_sy]}</a></tpl><tpl if="values[6].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[6].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[6].ndsy_dwdm]}', 'y');">{[values[6].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[6].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[6].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[6].ndsy_dwdm]}', 'n');">{[values[6].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[6].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[6].ndsy_dwdm]}', '');">{[values[6].ndsy_jd4_sy]}</a></tpl><tpl if="values[6].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


	<tr class="total">
		<td>总计</td>

		<td class="green"><tpl if="values[7].ndsy_jd1_zcsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[7].ndsy_dwdm]}', 'y');">{[values[7].ndsy_jd1_zcsy]}</a></tpl><tpl if="values[7].ndsy_jd1_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndsy_jd1_ycsy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[7].ndsy_dwdm]}', 'n');">{[values[7].ndsy_jd1_ycsy]}</a></tpl><tpl if="values[7].ndsy_jd1_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsy_jd1_sy!='0'"><a href="#" onclick="javascript:ndsy(1, '{[values[7].ndsy_dwdm]}', '');">{[values[7].ndsy_jd1_sy]}</a></tpl><tpl if="values[7].ndsy_jd1_sy=='0'">-</tpl></td>


		<td class="green"><tpl if="values[7].ndsy_jd2_zcsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[7].ndsy_dwdm]}', 'y');">{[values[7].ndsy_jd2_zcsy]}</a></tpl><tpl if="values[7].ndsy_jd2_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndsy_jd2_ycsy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[7].ndsy_dwdm]}', 'n');">{[values[7].ndsy_jd2_ycsy]}</a></tpl><tpl if="values[7].ndsy_jd2_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsy_jd2_sy!='0'"><a href="#" onclick="javascript:ndsy(2, '{[values[7].ndsy_dwdm]}', '');">{[values[7].ndsy_jd2_sy]}</a></tpl><tpl if="values[7].ndsy_jd2_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[7].ndsy_jd3_zcsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[7].ndsy_dwdm]}', 'y');">{[values[7].ndsy_jd3_zcsy]}</a></tpl><tpl if="values[7].ndsy_jd3_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndsy_jd3_ycsy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[7].ndsy_dwdm]}', 'n');">{[values[7].ndsy_jd3_ycsy]}</a></tpl><tpl if="values[7].ndsy_jd3_ycsy=='0'">-</tpl></td>

		<td><tpl if="values[7].ndsy_jd3_sy!='0'"><a href="#" onclick="javascript:ndsy(3, '{[values[7].ndsy_dwdm]}', '');">{[values[7].ndsy_jd3_sy]}</a></tpl><tpl if="values[7].ndsy_jd3_sy=='0'">-</tpl></td>

		<td class="green"><tpl if="values[7].ndsy_jd4_zcsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[7].ndsy_dwdm]}', 'y');">{[values[7].ndsy_jd4_zcsy]}</a></tpl><tpl if="values[7].ndsy_jd4_zcsy=='0'">-</tpl></td>
		<td class="red"><tpl if="values[7].ndsy_jd4_ycsy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[7].ndsy_dwdm]}', 'n');">{[values[7].ndsy_jd4_ycsy]}</a></tpl><tpl if="values[7].ndsy_jd4_ycsy=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsy_jd4_sy!='0'"><a href="#" onclick="javascript:ndsy(4, '{[values[7].ndsy_dwdm]}', '');">{[values[7].ndsy_jd4_sy]}</a></tpl><tpl if="values[7].ndsy_jd4_sy=='0'">-</tpl></td>

	</tr>


</table>


</#assign>
<#assign tpl_ndsg>


<table border="0" cellpadding="0" cellspacing="0" class="pisoft-zhib-inner-tab02">
	<!--  <caption><b>事故情况统计(统计时间：{[values[7].ndsg_gsmc]})</b></caption> -->
	<tr class="pisoft-zhib-inner-tab02-title">
		<td rowspan="2" style="width:16%;">单位名称</td>
		<td colspan="2" style="width:21%;">第一季度</td>

		<td colspan="2" style="width:21%;">第二季度</td>
		<td colspan="2" style="width:21%;">第三季度</td>
		<td colspan="2" style="width:21%;">第四季度</td>
	</tr>
	<tr class="pisoft-zhib-inner-tab02-title">
		<td>电网</td>
		<td>设备</td>

		<td>电网</td>
		<td>设备</td>

		<td>电网</td>
		<td>设备</td>

		<td>电网</td>

		<td>设备</td>
	</tr>

	<tr >
		<td>{[values[0].ndsg_gsmc]}</td>

		<td><tpl if="values[0].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[0].ndsg_dwdm]}', '1');">{[values[0].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[0].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[0].ndsg_dwdm]}', '2');">{[values[0].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[0].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[0].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[0].ndsg_dwdm]}', '1');">{[values[0].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[0].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[0].ndsg_dwdm]}', '2');">{[values[0].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[0].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[0].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[0].ndsg_dwdm]}', '1');">{[values[0].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[0].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[0].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[0].ndsg_dwdm]}', '2');">{[values[0].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[0].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[0].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[0].ndsg_dwdm]}', '1');">{[values[0].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[0].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[0].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[0].ndsg_dwdm]}', '2');">{[values[0].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[0].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[1].ndsg_gsmc]}</td>

		<td><tpl if="values[1].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[1].ndsg_dwdm]}', '1');">{[values[1].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[1].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[1].ndsg_dwdm]}', '2');">{[values[1].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[1].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[1].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[1].ndsg_dwdm]}', '1');">{[values[1].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[1].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[1].ndsg_dwdm]}', '2');">{[values[1].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[1].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[1].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[1].ndsg_dwdm]}', '1');">{[values[1].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[1].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[1].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[1].ndsg_dwdm]}', '2');">{[values[1].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[1].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[1].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[1].ndsg_dwdm]}', '1');">{[values[1].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[1].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[1].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[1].ndsg_dwdm]}', '2');">{[values[1].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[1].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[2].ndsg_gsmc]}</td>

		<td><tpl if="values[2].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[2].ndsg_dwdm]}', '1');">{[values[2].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[2].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[2].ndsg_dwdm]}', '2');">{[values[2].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[2].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[2].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[2].ndsg_dwdm]}', '1');">{[values[2].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[2].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[2].ndsg_dwdm]}', '2');">{[values[2].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[2].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[2].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[2].ndsg_dwdm]}', '1');">{[values[2].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[2].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[2].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[2].ndsg_dwdm]}', '2');">{[values[2].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[2].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[2].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[2].ndsg_dwdm]}', '1');">{[values[2].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[2].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[2].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[2].ndsg_dwdm]}', '2');">{[values[2].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[2].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[3].ndsg_gsmc]}</td>

		<td><tpl if="values[3].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[3].ndsg_dwdm]}', '1');">{[values[3].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[3].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[3].ndsg_dwdm]}', '2');">{[values[3].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[3].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[3].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[3].ndsg_dwdm]}', '1');">{[values[3].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[3].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[3].ndsg_dwdm]}', '2');">{[values[3].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[3].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[3].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[3].ndsg_dwdm]}', '1');">{[values[3].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[3].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[3].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[3].ndsg_dwdm]}', '2');">{[values[3].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[3].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[3].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[3].ndsg_dwdm]}', '1');">{[values[3].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[3].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[3].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[3].ndsg_dwdm]}', '2');">{[values[3].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[3].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[4].ndsg_gsmc]}</td>

		<td><tpl if="values[4].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[4].ndsg_dwdm]}', '1');">{[values[4].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[4].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[4].ndsg_dwdm]}', '2');">{[values[4].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[4].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[4].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[4].ndsg_dwdm]}', '1');">{[values[4].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[4].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[4].ndsg_dwdm]}', '2');">{[values[4].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[4].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[4].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[4].ndsg_dwdm]}', '1');">{[values[4].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[4].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[4].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[4].ndsg_dwdm]}', '2');">{[values[4].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[4].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[4].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[4].ndsg_dwdm]}', '1');">{[values[4].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[4].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[4].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[4].ndsg_dwdm]}', '2');">{[values[4].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[4].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[5].ndsg_gsmc]}</td>

		<td><tpl if="values[5].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[5].ndsg_dwdm]}', '1');">{[values[5].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[5].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[5].ndsg_dwdm]}', '2');">{[values[5].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[5].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[5].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[5].ndsg_dwdm]}', '1');">{[values[5].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[5].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[5].ndsg_dwdm]}', '2');">{[values[5].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[5].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[5].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[5].ndsg_dwdm]}', '1');">{[values[5].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[5].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[5].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[5].ndsg_dwdm]}', '2');">{[values[5].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[5].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[5].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[5].ndsg_dwdm]}', '1');">{[values[5].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[5].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[5].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[5].ndsg_dwdm]}', '2');">{[values[5].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[5].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr >
		<td>{[values[6].ndsg_gsmc]}</td>

		<td><tpl if="values[6].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[6].ndsg_dwdm]}', '1');">{[values[6].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[6].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[6].ndsg_dwdm]}', '2');">{[values[6].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[6].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[6].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[6].ndsg_dwdm]}', '1');">{[values[6].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[6].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[6].ndsg_dwdm]}', '2');">{[values[6].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[6].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[6].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[6].ndsg_dwdm]}', '1');">{[values[6].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[6].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[6].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[6].ndsg_dwdm]}', '2');">{[values[6].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[6].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[6].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[6].ndsg_dwdm]}', '1');">{[values[6].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[6].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[6].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[6].ndsg_dwdm]}', '2');">{[values[6].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[6].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

	<tr class="total">
		<td>总计</td>

		<td><tpl if="values[7].ndsg_jd1_dwsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[7].ndsg_dwdm]}', '1');">{[values[7].ndsg_jd1_dwsg]}</a></tpl><tpl if="values[7].ndsg_jd1_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsg_jd1_sbsg!='0'"><a href="#" onclick="javascript:ndsg(1, '{[values[7].ndsg_dwdm]}', '2');">{[values[7].ndsg_jd1_sbsg]}</a></tpl><tpl if="values[7].ndsg_jd1_sbsg=='0'">-</tpl></td>


		<td><tpl if="values[7].ndsg_jd2_dwsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[7].ndsg_dwdm]}', '1');">{[values[7].ndsg_jd2_dwsg]}</a></tpl><tpl if="values[7].ndsg_jd2_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsg_jd2_sbsg!='0'"><a href="#" onclick="javascript:ndsg(2, '{[values[7].ndsg_dwdm]}', '2');">{[values[7].ndsg_jd2_sbsg]}</a></tpl><tpl if="values[7].ndsg_jd2_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[7].ndsg_jd3_dwsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[7].ndsg_dwdm]}', '1');">{[values[7].ndsg_jd3_dwsg]}</a></tpl><tpl if="values[7].ndsg_jd3_dwsg=='0'">-</tpl></td>
		<td><tpl if="values[7].ndsg_jd3_sbsg!='0'"><a href="#" onclick="javascript:ndsg(3, '{[values[7].ndsg_dwdm]}', '2');">{[values[7].ndsg_jd3_sbsg]}</a></tpl><tpl if="values[7].ndsg_jd3_sbsg=='0'">-</tpl></td>

		<td><tpl if="values[7].ndsg_jd4_dwsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[7].ndsg_dwdm]}', '1');">{[values[7].ndsg_jd4_dwsg]}</a></tpl><tpl if="values[7].ndsg_jd4_dwsg=='0'">-</tpl></td>

		<td><tpl if="values[7].ndsg_jd4_sbsg!='0'"><a href="#" onclick="javascript:ndsg(4, '{[values[7].ndsg_dwdm]}', '2');">{[values[7].ndsg_jd4_sbsg]}</a></tpl><tpl if="values[7].ndsg_jd4_sbsg=='0'">-</tpl></td>

	</tr>

</table>


</#assign>
var tpl_ndqx = '${tpl_ndqx?js_string}';
var tpl_ndsy = '${tpl_ndsy?js_string}';
var tpl_ndjcyj = '${tpl_ndjcyj?js_string}';
var tpl_ndsg = '${tpl_ndsg?js_string}';
