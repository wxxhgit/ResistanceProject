package com.rp.model;

public class CaiYangHL {
    private String zsbh;// 送检仪器证书编号
    private String standardvalue;// 标准值
    private String displayvalue;// 显示值
    private String lc;// 量程
    private String lczhi;//量程数值
    private String lc_value;//量程实际值
    private String dw;// 单位
    private int id;// 顺序

    public CaiYangHL() {
        super();
        this.zsbh = "";
        this.standardvalue = "";
        this.displayvalue = "";
        this.lc="";
        this.lczhi="";
        this.lc_value="";
        this.dw = "";
        this.id = 0;
    }

    public String getZsbh() {
        return zsbh;
    }

    public void setZsbh(String zsbh) {
        this.zsbh = zsbh;
    }

    public String getStandardvalue() {
        return standardvalue;
    }

    public void setStandardvalue(String standardvalue) {
        this.standardvalue = standardvalue;
    }

    public String getDisplayvalue() {
        return displayvalue;
    }

    public void setDisplayvalue(String readvalue) {
        this.displayvalue = readvalue;
    }

    public String getLc() { return lc; }

    public void setLc(String lc) { this.lc = lc; }

    public String getLczhi() { return lczhi; }

    public void setLczhi(String lczhi) { this.lczhi = lczhi; }

    public String getLc_value() { return lc_value; }

    public void setLc_value(String lc_value) { this.lc_value = lc_value; }

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
        return "CaiYangRNRX [zsbh=" + zsbh + ", standardvalue=" + standardvalue
                + ", displayvalue=" + displayvalue  +", lc=" + lc +", lczhi=" + lczhi +
                ", lc_value=" + lc_value +
                ", dw=" + dw + ", id=" + id + "]";
    }
}
