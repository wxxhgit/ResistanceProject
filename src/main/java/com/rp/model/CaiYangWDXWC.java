package com.rp.model;

/*
* 回路电阻稳定性误差测量
* */

public class CaiYangWDXWC {

    private String zsbh; //送检仪器证书编号
    private String readvalue; //测量读数值
    private String wdxwc; //稳定性误差
    private String dw; //单位
    private int id; //序号

    public CaiYangWDXWC() {
        super();
        this.zsbh = "";
        this.readvalue = "";
        this.wdxwc = "";
        this.dw = "";
        this.id = 0;
    }

    public String getZsbh() {
        return zsbh;
    }

    public void setZsbh(String zsbh) {
        this.zsbh = zsbh;
    }

    public String getReadvalue() {
        return readvalue;
    }

    public void setReadvalue(String readvalue) {
        this.readvalue = readvalue;
    }

    public String getWdxwc() {
        return wdxwc;
    }

    public void setWdxwc(String wdxwc) {
        this.wdxwc = wdxwc;
    }

    public String getDw() {
        return dw;
    }

    public void setDw(String dw) {
        this.dw = dw;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "CaiYangWDXWC [zsbh=" + zsbh + ", readvalue=" + readvalue
               + ", dw=" + dw + ", id=" + id
                + "]";
    }
}
