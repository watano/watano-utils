package com.watano.util.mvn;

import org.apache.commons.lang3.StringUtils;
import org.apache.maven.model.Dependency;
import org.apache.maven.model.Exclusion;
import org.apache.maven.model.Plugin;

public class Artifact {
	private String groupId = null;
	private String artifactId = null;
	private String version = null;
	private String scope = null;

	public Artifact(String groupId, String artifactId, String version, String scope) {
		super();
		this.groupId = groupId;
		this.artifactId = artifactId;
		if (StringUtils.isNotBlank(version)) {
			this.version = version;
		}
		if (StringUtils.isNotBlank(scope)) {
			this.scope = scope;
		}
	}

	public Dependency toDependency() {
		Dependency d = new Dependency();
		d.setGroupId(groupId);
		d.setArtifactId(artifactId);
		d.setVersion(version);
		d.setScope(scope);
		return d;
	}

	public Plugin toPlugin() {
		Plugin d = new Plugin();
		d.setGroupId(groupId);
		d.setArtifactId(artifactId);
		d.setVersion(version);
		return d;
	}

	public Exclusion toExclusion() {
		Exclusion d = new Exclusion();
		d.setGroupId(groupId);
		d.setArtifactId(artifactId);
		return d;
	}
}
