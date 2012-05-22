package com.watano.util.collection;

public class NameValuePair<KEY,VALUE> {
	private KEY name;
	private VALUE value;

	public NameValuePair() {
		super();
	}

	public NameValuePair(KEY name, VALUE value) {
		super();
		this.name = name;
		this.value = value;
	}

	public KEY getName() {
		return name;
	}
	public void setName(KEY name) {
		this.name = name;
	}
	public VALUE getValue() {
		return value;
	}
	public void setValue(VALUE value) {
		this.value = value;
	}
}
