<#import "/ftl/jdbc.inc.ftl" as jdbc>
<#import "/ftl/sql.inc.ftl" as sql>
<#assign DefaultDataSource=DataSource(
	'com.mysql.jdbc.Driver',
	'jdbc:mysql://127.0.0.1:3306/dlhjpos',
	'watano',
	'PKhGapCqCBfUbP3BIrlu') /> 
<#global queryMode=2 />	
<#global paramMode=1 />	
<#global debug=true />	
<#assign query_params2={ 
	'department_ids':1,
	'cashier_id':1,
	'customer_id':1,
	'saleGuide_id':1	
}/>  
<@jdbc.renderSql2Table ds=DefaultDataSource >  
${sql.select("    
	so.id,  
	so.no as salesOrder_no,          
	so.finalPrices as amount, 
	so.quantity as quantity,   
	so.department_id as dep_id,
	so.cashier_id as cashier_id,  
	so.customer_ItemID as customer_id,  
	${sql.timeSeriesField('so.saleTime')}
")}
from bs_SalesOrder so  
where 
	${sql.num('in', 'so.department_id','department_ids')} and
	${sql.num('=', 'so.cashier_id','cashier_id')} and  
	${sql.num('>', 'so.customer_ItemID','customer_id')} and 
	${sql.num('<=', 'so.saleGuide_id','saleGuide_id')} and
	${sql.period('so.saleTime')} and 
	so.status in(20) 
order by so.saleTime desc
</@jdbc.renderSql2Table>     
