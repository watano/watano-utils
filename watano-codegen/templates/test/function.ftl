${f.assertTrue(f.isNull(null))}  
${f.assertTrue(f.isNull(xxx))}  
${f.assertFalse(f.isNull('null'))}  
${f.assertTrue(f.isNull('null', 'null'))}
${f.assertFalse(f.isNull('xxx'))}  
${f.assertFalse(f.isNull('xxx', 'null'))}  

${f.assert(f.title('name'), 'name')}  
${f.assert(f.title('t_user.name'), '姓名')}  
${f.assert(f.title('name', 't_user'), '姓名')}  
${f.assert(f.title('name1', 't_user', {'t_user.name1.title':'姓名1'}), '姓名1')}  
<#assign prefix='t_user' />
<#assign options={
	't_user.name.title':'姓名1',
	't_user.name1.title':'姓名11',
	't_user.name.width':'50'
	} />
${f.assert(f.title('name', 't_user', options), '姓名1')}  
${f.assert(f.title('name1', 't_user', options), '姓名11')}  

${f.assert(f.jsoption('width', 'name', prefix, options, '60'), 'width:50')}   
${f.assert(f.jsoption('widthxx', 'name', prefix, options, '60'), 'widthxx:60')}   
${f.assert(f.jsoption('width', 'xxx', prefix, options, '60'), 'width:60')}   
${f.assert(f.jsoption('width', 'xxx', prefix, options), '')}
${f.assert(f.jsoption('widthxx', 'xxx', prefix, options), '')}
${f.assert(f.jsoption('sorttype', 'xxx', prefix, options, 'abc'), 'sorttype:abc')}
${f.assert(f.jsoption1('sorttype', 'xxx', prefix, options, 'abc'), 'sorttype:"abc"')}


${f.assert(f.jsmap([ "name1:'姓名1'" ]), "{name1:'姓名1'}")}
${f.assert(f.jsmap([ "name1:'姓名1'", "name2:'姓名2'" ]), "{name1:'姓名1',name2:'姓名2'}")}
${f.assert(f.jsmap([ "name1:'姓名1'", "name2:'姓名2'", "" ]), "{name1:'姓名1',name2:'姓名2'}")}    
		

