${cpf.resetIdMap()}

${f.assert(cpf.getId('id'), 'id')}
${f.assert(cpf.getId('id'), '')}
${f.assert(cpf.getId('id1'), 'id1')}

${cpf.id('id1', {'text':'text111'})}

${f.assertNotNull(cpf.getValue('id1.text'))}
${f.assert(cpf.getValue('id1.text'), 'text111')}

${f.assertNull(cpf.getValue('id1.text2'))}
${f.assertNotNull(cpf.setValue('id1.text', 'text222'))}
${f.assert(cpf.getValue('id1.text'), 'text222')}

${f.assertNull(cpf.getValue('id1.id2.id3.text'))}
${f.assertNotNull(cpf.setValue('id1.id2.id3.text', 'text333'))}
${f.assert(cpf.getValue('id1.id2.id3.text'), 'text333')}
${log('error',cpf.global_params.id1.id2.id3.text)}
