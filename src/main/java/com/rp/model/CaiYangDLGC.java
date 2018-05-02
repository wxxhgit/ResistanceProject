package com.rp.model;

public class CaiYangDLGC {
    private String zsbh; //送检仪器证书编号
    private String shizhi; //示值
    private String shijizhi; //实际值
    //private String dlgc; //电流过冲
    //private String gcmk; //过冲脉宽
    private String dw; //单位
    private int id; //序号

    public CaiYangDLGC() {
        super();
        this.zsbh = "";
        this.shizhi = "";
        this.shijizhi = "";
        //this.dlgc = "";
        //this.gcmk = "";
        this.dw = "";
        this.id = 0;
    }

    public String getZsbh() {
        return zsbh;
    }

    public void setZsbh(String zsbh) {
        this.zsbh = zsbh;
    }

    public String getShizhi() {
        return shizhi;
    }

    public void setShizhi(String shizhi) {
        this.shizhi = shizhi;
    }

    public String getShijizhi() {
        return shijizhi;
    }

    public void setShijizhi(String shijizhi) {
        this.shijizhi = shijizhi;
    }

//    public String getDlgc() {
//        return dlgc;
//    }
//
//    public void setDlgc(String dlgc) {
//        this.dlgc = dlgc;
//    }
//
//    public String getGcmk() {
//        return gcmk;
//    }
//
//    public void setGcmk(String gcmk) {
//        this.gcmk = gcmk;
//    }

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
        return "CaiYangWDXWC [zsbh=" + zsbh + ", shizhi=" + shizhi
                + ", shijizhi=" + shijizhi
              //  + ", dlgc=" + dlgc + ", gcmk=" + gcmk
                + ", dw=" + dw + ", id=" + id
                + "]";
    }

}
