package com.watano.util.lang;

public class KeyValue<K,V> {
	private K key;
	private V value;

	public KeyValue() {
		super();
		set(null, null);
	}

	public KeyValue(K key, V value) {
		super();
		set(key, value);
	}

	public K getKey() {
		return key;
	}
	public void setKey(K key) {
		this.key = key;
	}
	public V getValue() {
		return value;
	}
	public void setValue(V value) {
		this.value = value;
	}
	public void set(K key, V value) {
		this.key = key;
		this.value = value;
	}
}
