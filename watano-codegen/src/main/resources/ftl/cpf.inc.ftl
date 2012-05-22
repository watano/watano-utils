<#-- Cascading Params Framework -->
<#assign id_names=[] />
<#assign global_params={} />

<#function resetIdMap>
	<#assign id_names=[] />
	<#return ''>
</#function>

<#function getId name>
	<#list id_names as id>
		<#if id==name>
			${log('ERROR', 'the id "'+id+'" is existing')}
			<#return ''>
		</#if>
	</#list>
	<#assign id_names=id_names+[name] />
	<#return name>
</#function>

<#function common params={}>
	<#assign global_params={} + params />
	<#return ''>
</#function>

<#function id name params>
	<#assign gparams=(global_params[name])!{} />
	<#assign gparams=gparams + params />
	<#assign global_params=global_params + {name:gparams} />
	<#return name>
</#function>

<#function getValue key default=''>
	<#assign ks=key?split('.')/>
	<#assign v=global_params />
	<#list ks as k>
		<#if v[k]??>
			<#assign v=v[k] />
		<#else>
			<#return default>
		</#if>
	</#list>
	<#return v>
</#function>

<#function setValue key value>
	<#assign ks=key?split('.')/>
	<#assign v={ks[ks?size-1]:value} />
	<#list ks[0..ks?size-2]?reverse as k>
		<#assign v={k:v} />
	</#list>
	<#assign global_params=global_params+v />
	<#return value>
</#function>

<#function attributes id>
	<#assign html='' />
	<#assign values=cpf.getValue(id, {}) />
	<#list values?keys as k>
		<#assign v=(values[k])!f.null />
		<#if v?is_boolean>
			<#assign v=v?string('true','false') />
		</#if>
		<#if v?is_string && v != f.null>
			<#assign html=html+' '+k+'="'+v+'"' />
		</#if>
	</#list>
	<#return html>
</#function>
