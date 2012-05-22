<#import "/ftl/pomxml.inc.ftl" as pom>
<@pom.project groupId=groupId artifactId=artifactId name=name  packaging=packaging version=version>
	<@pom.properties nvp=properties />
	<@pom.repositories repos=['xtend'] repositories=repositories />
	<@pom.dependencies ids=dependencies />
	<build>
		<@pom.plugins ids=plugins />
	</build>
</@pom.project>
