package com.watano.util.collection;

import java.util.Hashtable;
import java.util.Iterator;

public class HashtableUtil{
	private Hashtable<?, ?> ht = null;
	private Iterator<?> keys = null;
	private int keysIndex = 0;

	public HashtableUtil(Hashtable<?, ?> ht) {
		super();
		this.ht = ht;
	}

	public boolean hasNextKey(){
		if(ht == null) {
			return false;
		}
		if(keys == null){
			keys = ht.keySet().iterator();
			keysIndex = 0;
		}
		return keys.hasNext();
	}
	public int currentIndex(){
		return keysIndex;
	}
	public Object nextKey(){
		if(ht == null) {
			return null;
		}
		if(keys == null) {
			return null;
		}
		keysIndex++;
		return keys.next();
	}
	public void resetKeysIndex(){
		keys = null;
		keysIndex = 0;
	}

	public static Hashtable<Object, Object> parseHashTable(Object[][] objs){
		Hashtable<Object, Object> result = null;
		if(objs != null){
			result = new Hashtable<Object, Object>();
			for(int i=0; i<objs.length; i++){
				if(objs[i] != null && objs[i].length >= 2
						&& objs[i][0] != null && objs[i][1] != null){
					result.put(objs[i][0], objs[i][1]);
				}
			}
		}
		return result;
	}

	public static String toString(Hashtable<?, ?> hashtable){
		String resultString = Hashtable.class.getName()+"@";
		HashtableUtil htUtil = new HashtableUtil(hashtable);
		if(htUtil != null && hashtable!= null){
			resultString += hashtable.hashCode();
			resultString += "{";
			while(htUtil.hasNextKey()){
				Object key = htUtil.nextKey();
				resultString += "{"+key.toString()+","+hashtable.get(key).toString()+"}";
			}
			resultString += "}";
		}else{
			resultString += "null";
		}
		htUtil = null;
		return resultString;
	}

	public static boolean compare(Hashtable<?, ?> hashtable1, Hashtable<?, ?> hashtable2){
		boolean issame = false;
		if(hashtable1 != null && hashtable2 != null && hashtable1.size() == hashtable2.size()){
			HashtableUtil htutil = new HashtableUtil(hashtable1);
			boolean flag = true;
			while(htutil.hasNextKey()){
				Object key = htutil.nextKey();
				if(!hashtable1.get(key).equals(hashtable2.get(key))){
					flag = false;
				}
			}
			issame = flag;
		}
		return issame;
	}

	public static void append(Hashtable<Object, Object> hashtable1, Hashtable<?, ?> hashtable2){
		if(hashtable2 != null){
			if(hashtable1 == null) {
				hashtable1 = new Hashtable<Object, Object>();
			}
			HashtableUtil htutil = new HashtableUtil(hashtable2);
			while(htutil.hasNextKey()){
				Object key = htutil.nextKey();
				Object value = hashtable2.get(key);
				hashtable1.put(key, value);
			}
		}
	}

}
