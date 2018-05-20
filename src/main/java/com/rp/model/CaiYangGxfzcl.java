package com.rp.model;

public class CaiYangGxfzcl {
    private String zsbh;
    private String shijizhi;
    private String zhishizhi;
    private String gzdl;
    private String dw;
    private int id;

    public CaiYangGxfzcl(){
        this.zsbh="";
        this.shijizhi="";
        this.zhishizhi="";
        this.gzdl="";
        this.dw="";
        this.id=0;
    }

    public String getZsbh() { return zsbh; }

    public void setZsbh(String zsbh) { this.zsbh = zsbh; }

    public String getShijizhi() { return shijizhi; }

    public void setShijizhi(String shijizhi) { this.shijizhi = shijizhi; }

    public String getZhishizhi() { return zhishizhi; }

    public void setZhishizhi(String zhishizhi) { this.zhishizhi = zhishizhi; }

    public String getGzdl() { return gzdl; }

    public void setGzdl(String gzdl) { this.gzdl = gzdl; }

    public String getDw() { return dw; }

    public void setDw(String dw) { this.dw = dw; }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String toString(){
        return "CaiYangGxfzcl [zsbh=" + zsbh + ",shijizhi=" + shijizhi
                + ",zhishizhi="+zhishizhi
                +",gzdl="+gzdl+",dw="+dw+",id="+id+"]";
    }
}
