package com.rp.model;

public class InspectionDecLeft {
	private String zsbh;//送检仪器证书编号
	private String wg;//外观
	private String jydz;//绝缘电阻
	private String jyqd;//绝缘强度
	private String xsnl;//显示能力
	private String klcldy;//开路测量电压
	private String dldy;//跌落（中值）电压
	private String dndywdx;//端钮电压稳定性
	private String qxyyjy;//倾斜影响检验
	private String jdjl;//检定结论
	private String tdjc;//通电检查
	private String wzyxsy;//位置影响试验
	private String fzjddzyxsy;//辅助接地电阻影响试验
	private String fbl;//分辨力
	private String xxwc;//线性误差
	private String xldl;//泄露电流
	private String wdxwc;//稳定性误差
	private String dlgc;//电流过冲
	private String gcmk;//过冲脉宽
	private String eddlwcsj;//额定电流维持时间
	private String eddl;//额定电流
	private String xdkzbqdd;//相对扩展不确定度
    /////
	private String flag;  //模块选中标志位
	public InspectionDecLeft() {
		super();
		this.zsbh = "";
		this.wg = "";
		this.jydz = "";
		this.jyqd = "";
		this.xsnl = "";
		this.klcldy = "";
		this.dldy = "";
		this.dndywdx = "";
		this.qxyyjy = "";
		this.jdjl = "";
		this.tdjc = "";
		this.wzyxsy = "";
		this.fzjddzyxsy = "";
		this.fbl="";
		this.xxwc="";
		this.xldl="";
		this.wdxwc="";
		this.dlgc="";
		this.gcmk="";
		this.eddlwcsj="";
		this.eddl="";
		this.xdkzbqdd="";
		this.flag="";
	}
	public String getZsbh() {
		return zsbh;
	}
	public void setZsbh(String zsbh) {
		this.zsbh = zsbh;
	}
	public String getWg() {
		return wg;
	}
	public void setWg(String wg) {
		this.wg = wg;
	}
	public String getJydz() {
		return jydz;
	}
	public void setJydz(String jydz) {
		this.jydz = jydz;
	}
	public String getJyqd() {
		return jyqd;
	}
	public void setJyqd(String jyqd) {
		this.jyqd = jyqd;
	}
	public String getXsnl() {
		return xsnl;
	}
	public void setXsnl(String xsnl) {
		this.xsnl = xsnl;
	}
	public String getKlcldy() {
		return klcldy;
	}
	public void setKlcldy(String klcldy) {
		this.klcldy = klcldy;
	}
	public String getDldy() {
		return dldy;
	}
	public void setDldy(String dldy) {
		this.dldy = dldy;
	}
	public String getDndywdx() {
		return dndywdx;
	}
	public void setDndywdx(String dndywdx) {
		this.dndywdx = dndywdx;
	}
	public String getQxyyjy() {
		return qxyyjy;
	}
	public void setQxyyjy(String qxyyjy) {
		this.qxyyjy = qxyyjy;
	}
	public String getJdjl() {
		return jdjl;
	}
	public void setJdjl(String jdjl) {
		this.jdjl = jdjl;
	}
	public String getTdjc() {
		return tdjc;
	}
	public void setTdjc(String tdjc) {
		this.tdjc = tdjc;
	}
	public String getWzyxsy() {
		return wzyxsy;
	}
	public void setWzyxsy(String wzyxsy) {
		this.wzyxsy = wzyxsy;
	}
	public String getFzjddzyxsy() {
		return fzjddzyxsy;
	}
	public void setFzjddzyxsy(String fzjddzyxsy) {
		this.fzjddzyxsy = fzjddzyxsy;
	}

	public String getFbl() {
		return fbl;
	}

	public void setFbl(String fbl) {
		this.fbl = fbl;
	}

	public String getXxwc() {
		return xxwc;
	}

	public void setXxwc(String xxwc) { this.xxwc = xxwc; }

	public String getXldl() {
		return xldl;
	}

	public void setXldl(String xldl) {
		this.xldl = xldl;
	}

	public String getWdxwc() {
		return wdxwc;
	}

	public void setWdxwc(String wdxwc) {
		this.wdxwc = wdxwc;
	}

	public String getDlgc() {
		return dlgc;
	}

	public void setDlgc(String dlgc) {
		this.dlgc = dlgc;
	}

	public String getGcmk() {
		return gcmk;
	}

	public void setGcmk(String gcmk) {
		this.gcmk = gcmk;
	}

	public String getEddlwcsj() { return eddlwcsj; }

	public void setEddlwcsj(String eddlwcsj) { this.eddlwcsj = eddlwcsj; }

	public String getEddl() { return eddl; }

	public void setEddl(String eddl) { this.eddl = eddl; }

	public String getXdkzbqdd() { return xdkzbqdd; }

	public void setXdkzbqdd(String xdkzbqdd) { this.xdkzbqdd = xdkzbqdd; }

    public String getFlag() { return flag; }

    public void setFlag(String flag) { this.flag = flag; }

    @Override
	public String toString() {
		return "InspectionDecLeft [zsbh=" + zsbh + ", wg=" + wg + ", jydz="
				+ jydz + ", jyqd=" + jyqd + ", xsnl=" + xsnl + ", klcldy="
				+ klcldy + ", dldy=" + dldy + ", dndywdx=" + dndywdx
				+ ", qxyyjy=" + qxyyjy + ", jdjl=" + jdjl + ", tdjc=" + tdjc
				+ ", wzyxsy=" + wzyxsy + ", fzjddzyxsy=" + fzjddzyxsy
				+ ", fbl=" + fbl + ", xxwc=" + xxwc + ", xldl=" + xldl
				+ ", wdxwc=" + wdxwc + ", dlgc=" + dlgc +", gcmk=" + gcmk
				+", eddlwcsj=" + eddlwcsj + ", eddl=" + eddl +", xdkzbqdd=" + xdkzbqdd
                + ", flag=" + flag +"]";
	}
	
	
}
