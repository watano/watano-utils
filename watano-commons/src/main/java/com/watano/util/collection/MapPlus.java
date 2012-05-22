package com.watano.util.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.Map;
import java.util.Set;

public class MapPlus<K,V> implements Map<K, V> {
	private Map<K, V> m = null;

	public MapPlus() {
		super();
		this.m = new Hashtable<K, V>();
	}

	public MapPlus(Map<K, V> m) {
		super();
		this.m = m;
	}

	@Override
	public int size() {
		return m==null?0:m.size();
	}

	@Override
	public boolean isEmpty() {
		return m==null || m.isEmpty();
	}

	@Override
	public boolean containsKey(Object key) {
		return m!=null && m.containsKey(key);
	}

	@Override
	public boolean containsValue(Object value) {
		return m!=null && m.containsValue(value);
	}

	@Override
	public V get(Object key) {
		return m==null?null:m.get(key);
	}

	@Override
	public V put(K key, V value) {
		return value==null?null:m.put(key, value);
	}

	@Override
	public V remove(Object key) {
		return m.remove(key);
	}

	@Override
	public void putAll(Map<? extends K, ? extends V> _m) {
		m.putAll(_m);
	}

	@Override
	public void clear() {
		m.clear();
	}

	@Override
	public Set<K> keySet() {
		return m==null?new HashSet<K>():m.keySet();
	}

	@Override
	public Collection<V> values() {
		return m==null?new ArrayList<V>():m.values();
	}

	@Override
	public Set<java.util.Map.Entry<K, V>> entrySet() {
		return m==null?new HashSet<java.util.Map.Entry<K, V>>():m.entrySet();
	}

	public int intValue(Object key, int defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).intValue();
		}else if(value != null && value instanceof String){
			return Integer.parseInt((String)value);
		}
		return defaultValue;
	}

	public long longValue(Object key, long defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).longValue();
		}else if(value != null && value instanceof String){
			return Long.parseLong((String)value);
		}
		return defaultValue;
	}

	public short shortValue(Object key, short defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).shortValue();
		}else if(value != null && value instanceof String){
			return Short.parseShort((String)value);
		}
		return defaultValue;
	}

	public float floatValue(Object key, float defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).floatValue();
		}else if(value != null && value instanceof String){
			return Float.parseFloat((String)value);
		}
		return defaultValue;
	}

	public double floatValue(Object key, double defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).doubleValue();
		}else if(value != null && value instanceof String){
			return Double.parseDouble((String)value);
		}
		return defaultValue;
	}

	public byte byteValue(Object key, byte defaultValue){
		V value = get(key);
		if(value != null && value instanceof Number){
			return ((Number)value).byteValue();
		}else if(value != null && value instanceof String){
			return Byte.parseByte((String)value);
		}
		return defaultValue;
	}

	public char charValue(Object key, char defaultValue){
		V value = get(key);
		if(value != null && value instanceof String && ((String)value).trim().length()>0){
			return ((String)value).trim().charAt(0);
		}
		return defaultValue;
	}

	public boolean booleanValue(Object key, boolean defaultValue){
		V value = get(key);
		if(value != null && value instanceof String && ((String)value).trim().length()>0){
			String v= ((String)value).trim();
			if("1".equals(v) || "true".equalsIgnoreCase(v) || "yes".equalsIgnoreCase(v) || "on".equalsIgnoreCase(v)) {
				return true;
			}
			if("0".equals(v) || "false".equalsIgnoreCase(v) || "no".equalsIgnoreCase(v) || "off".equalsIgnoreCase(v)) {
				return false;
			}
		}
		return defaultValue;
	}

	public MapPlus<K,V> set(K k, V v){
		put(k, v);
		return this;
	}
}
