package com.rp.action;

import java.io.IOException;
import java.text.SimpleDateFormat;
//import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.rp.model.*;
import com.rp.service.RpService;
import com.rp.utility.CopyFile;
import com.rp.utility.ReadSerialPort;
import com.rp.utility.WordCreation;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * @author Administrator
 */
public class RpAction extends BaseAction {

    /**
     * 序列化
     */
    private static final long serialVersionUID = 2031023310875335897L;
    private RpService rpService = new RpService();
    private static final ReadSerialPort readSerialPort = new ReadSerialPort();

    /**
     * 方法序号：1 登录
     *
     * @throws IOException
     */
    public String login() throws IOException {
        String username = this.getRequest().getParameter("username");
        String password = this.getRequest().getParameter("password");
        String result = rpService.login(username, password);
        String flag;
        if (result != null) {
            flag = "1";
        } else {
            flag = "0";
        }
//		JSONObject jo = new JSONObject();
//		jo.put("jsonObject", flag);
//		jo.put("username", username);
        this.getRequest().getSession().setAttribute("username", username);
        this.getRequest().getSession().setAttribute("password", password);
        System.out.println("---------------------------");
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(flag);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：2 注册
     *
     * @throws IOException
     */
    public String register() throws IOException {
        String username = this.getRequest().getParameter("username");
        String password = this.getRequest().getParameter("password");
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        boolean result = rpService.register(user);
        String flag;
        if (result) {
            flag = "注册成功！";
        } else {
            flag = "注册失败！";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：3 送检仪器信息录入
     *
     * @throws IOException
     */
    public String addInspectionDevice() throws IOException {
        //
//	    Calendar c= Calendar.getInstance();
//	    String time=new SimpleDateFormat("HH:mm:ss").format(c.getTime());
        InspectionDevice inspectionDevice = new InspectionDevice();
        inspectionDevice.setLeixing(this.getRequest().getParameter("leixing"));
        inspectionDevice.setXinghao(this.getRequest().getParameter("xinghao"));
        inspectionDevice.setYqmc(this.getRequest().getParameter("yqmc"));
        inspectionDevice.setYqbh(this.getRequest().getParameter("yqbh"));
        inspectionDevice.setSjdw(this.getRequest().getParameter("sjdw"));
        inspectionDevice.setZqddj(this.getRequest().getParameter("zqddj"));
        inspectionDevice.setClfw(this.getRequest().getParameter("clfw"));
        inspectionDevice.setSccj(this.getRequest().getParameter("sccj"));
        inspectionDevice.setJddd(this.getRequest().getParameter("jddd"));
        inspectionDevice.setWendu(this.getRequest().getParameter("wendu"));
        inspectionDevice.setShidu(this.getRequest().getParameter("shidu"));
        inspectionDevice.setJdsj(this.getRequest().getParameter("jdsj"));
        inspectionDevice.setYxqsj(this.getRequest().getParameter("yxqsj"));
//		inspectionDevice.setJdsj(this.getRequest().getParameter("jdsj")+" "+time);
//		inspectionDevice.setYxqsj(this.getRequest().getParameter("yxqsj")+" "+time);
        inspectionDevice.setJdyj(this.getRequest().getParameter("jdyj"));
        inspectionDevice.setZsbh(this.getRequest().getParameter("zsbh"));
        if (inspectionDevice.getLeixing().equals("绝缘电阻表")) {
            inspectionDevice.setStaDevLX("绝缘电阻表标准器");
        } else if (inspectionDevice.getLeixing().equals("接地电阻表")) {
            inspectionDevice.setStaDevLX("接地电阻表标准器");
        } else if (inspectionDevice.getLeixing().equals("回路电阻表")) {
            inspectionDevice.setStaDevLX("回路电阻表标准器");
        }
        // System.out.println(inspectionDevice.toString());
        boolean result = rpService.addInspectionDevice(inspectionDevice);

        String flag;
        if (result) {
            flag = "录入成功！";
        } else {
            flag = "录入失败！";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：3_1验证证书编号是否存在
     */
    public void verifyInspectionDeviceZSBH() throws IOException {
        String id = this.getRequest().getParameter("zsbh");
        long result = rpService.verifyInspectionDeviceZSBH(id);// 打包json数据
        // System.out.println(result);
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", result);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：4 查询所有送检仪器信息
     */
    public String findAllInspectionDevice() throws IOException {
        String result = rpService.findAllInspectionDevice();// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        // System.out.println(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：4_0 按某种特定顺序， 查询所有送检仪器信息
     */
    public String findAllInspectionDeviceByOrder() throws IOException {
        String order = this.getRequest().getParameter("order");
        String result = rpService.findAllInspectionDeviceByOrder(order);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：4_1 根据证书编号， 查询单条送检仪器信息
     */
    public String findOneInspectionDevice() throws IOException {
        String id = this.getRequest().getParameter("id");// 证书编号
        String result = rpService.findOneInspectionDevice(id);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号： 4_2 删除一条送检仪器信息
     *
     * @throws IOException
     */
    public String deleteInspectionDevice() throws IOException {
        String title = this.getRequest().getParameter("title");// 证书编号
        boolean result = rpService.deleteInspectionDevice(title);
        String flag;
        if (result) {
            flag = "1";// 删除成功！
        } else {
            flag = "0";// 删除失败！
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：4_3 修改一条送检仪器信息
     *
     * @throws IOException
     */
    public String modifyInspectionDevice() throws IOException {
//        Calendar c= Calendar.getInstance();
//        String time=new SimpleDateFormat("HH:mm:ss").format(c.getTime());
        InspectionDevice inspectionDevice = new InspectionDevice();
        inspectionDevice.setLeixing(this.getRequest().getParameter("leixing"));
        inspectionDevice.setXinghao(this.getRequest().getParameter("xinghao"));
        inspectionDevice.setYqmc(this.getRequest().getParameter("yqmc"));
        inspectionDevice.setYqbh(this.getRequest().getParameter("yqbh"));
        inspectionDevice.setSjdw(this.getRequest().getParameter("sjdw"));
        inspectionDevice.setZqddj(this.getRequest().getParameter("zqddj"));
        inspectionDevice.setClfw(this.getRequest().getParameter("clfw"));
        inspectionDevice.setSccj(this.getRequest().getParameter("sccj"));
        inspectionDevice.setJddd(this.getRequest().getParameter("jddd"));
        inspectionDevice.setWendu(this.getRequest().getParameter("wendu"));
        inspectionDevice.setShidu(this.getRequest().getParameter("shidu"));
        inspectionDevice.setJdsj(this.getRequest().getParameter("jdsj"));
        inspectionDevice.setYxqsj(this.getRequest().getParameter("yxqsj"));
//		inspectionDevice.setJdsj(this.getRequest().getParameter("jdsj")+" "+time);
//		inspectionDevice.setYxqsj(this.getRequest().getParameter("yxqsj")+" "+time);
        inspectionDevice.setJdyj(this.getRequest().getParameter("jdyj"));
        inspectionDevice.setZsbh(this.getRequest().getParameter("zsbh"));
        System.out.println(inspectionDevice.toString());
        boolean result = rpService.modifyInspectionDevice(inspectionDevice);

        String flag;
        if (result) {
            flag = "1";//修改成功！
        } else {
            flag = "0";//修改失败！
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：5 标准器信息录入
     *
     * @throws IOException
     */
    public String addStandardDevice() throws IOException {
//        Calendar c= Calendar.getInstance();
//        String time=new SimpleDateFormat("HH:mm:ss").format(c.getTime());
        StandardDevice standardDevice = new StandardDevice();
        standardDevice.setLx(this.getRequest().getParameter("leixing"));
        standardDevice.setXinghao(this.getRequest().getParameter("xinghao"));
        standardDevice.setMingchen(this.getRequest().getParameter("mingchen"));
        standardDevice.setYqbh(this.getRequest().getParameter("yqbh"));
        standardDevice.setBqdd(this.getRequest().getParameter("bqdd"));
        standardDevice.setJlbzzsh(this.getRequest().getParameter("jlbzzsh"));
        standardDevice.setYxqz(this.getRequest().getParameter("yxqz"));
//		standardDevice.setYxqz(this.getRequest().getParameter("yxqz")+" "+ time);

        boolean result = rpService.addStandardDevice(standardDevice);
        String flag;
        if (result) {
            flag = "录入成功！";
        } else {
            flag = "录入失败！";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：6 查询所有标准器信息
     */
    public String findAllStandardDevice() throws IOException {
        String result = rpService.findAllStandardDevice();// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号： 标准器信息 单条修改
     *
     * @throws IOException
     */
    public String modifyStandardDevice() throws IOException {
//        Calendar c= Calendar.getInstance();
//        String time=new SimpleDateFormat("HH:mm:ss").format(c.getTime());
        StandardDevice standardDevice = new StandardDevice();
        standardDevice.setXinghao(this.getRequest().getParameter("xinghao"));
        standardDevice.setMingchen(this.getRequest().getParameter("mingchen"));
        standardDevice.setYqbh(this.getRequest().getParameter("yqbh"));
        standardDevice.setBqdd(this.getRequest().getParameter("bqdd"));
        standardDevice.setJlbzzsh(this.getRequest().getParameter("jlbzzsh"));
        standardDevice.setYxqz(this.getRequest().getParameter("yxqz"));
//		standardDevice.setYxqz(this.getRequest().getParameter("yxqz")+" "+time);
        standardDevice.setLx(this.getRequest().getParameter("leixing"));
        boolean result = rpService.modifyStandardDevice(standardDevice);

        String flag;
        if (result) {
            flag = "1";//修改成功
        } else {
            flag = "0";//修改失败
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号： 删除标准器信息
     *
     * @throws IOException
     */
    public String deleteStandardDevice() throws IOException {
        String title = this.getRequest().getParameter("title");// 证书编号
        boolean result = rpService.deleteStandardDevice(title);
        String flag;
        if (result) {
            flag = "删除成功！";
        } else {
            flag = "删除失败！";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号： 7_1 增加送检仪器和标准器（型号）之间的对应关系
     */
//	public String addRelationship() throws IOException {
//		String zsbh = this.getRequest().getParameter("zsbh");
//		String xh = this.getRequest().getParameter("xh");
//		boolean result = rpService.addRelationship(zsbh, xh);
//		// 测试阶段先注释，正式时取消此七处注释
//		String flag;
//		if (result) {
//			flag = "1";// 添加成功
//		} else {
//			flag = "0";// 添加失败
//		}
//		JSONObject jo = new JSONObject();
//		jo.put("jsonObject", flag);
//		this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
//		this.getResponse().getWriter().print(jo);// 向前台发送json数据
//		return null;
//	}

    /**
     * 方法序号： 7_2 端口选择
     */
    public void listPorts() throws IOException {
        String result = readSerialPort.listPort();
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号： 7_3 打开指定端口
     */
    public void openPort() throws IOException {
        String portName = this.getRequest().getParameter("port");
        // 第一步 上位机发送：fe 68 11 00 00 0b b9 d5 16
        // byte[] swjOutPut1 = { -2, 104, 17, 0, 0, 11, -71, -43, 22 };
        // 第二步 下位机发送：FE 68 20 00 00 0b b9 e4 16 (发送密码)
        // byte[] xwjInPut = { -2, 104, 32, 0, 0, 11, -71, -28, 22 };
        // 第三步 上位机发送: fe 68 22 00 00 0b ba e7 16 (密码比对成功)
        // byte[] swjOutPut2 = { -2, 104, 34, 0, 0, 11, -70, -25, 22 };
        readSerialPort.selectPort(portName);
        boolean result = readSerialPort.isComPortFlag();
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        readSerialPort.setComPortFlag(false);
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        readSerialPort.startRead();// 单位毫秒 开始监听事件
    }

    /**
     * 方法序号： 7_3_1 发送密码
     */
    public void sendData() throws IOException {
        // 第一步 上位机发送：fe 68 11 00 00 0b b9 d5 16
        byte[] swjOutPut1 = {-2, 104, 17, 0, 0, 11, -71, -43, 22};
        // 第二步 下位机发送：FE 68 20 00 00 0b b9 e4 16 (发送密码)
        // byte[] xwjInPut = { -2, 104, 32, 0, 0, 11, -71, -28, 22 };
        // 第三步 上位机发送: fe 68 22 00 00 0b ba e7 16 (密码比对成功)
        // byte[] swjOutPut2 = { -2, 104, 34, 0, 0, 11, -70, -25, 22 };
        readSerialPort.write(swjOutPut1);
//		System.out.println("开始");
        //当前线程挂起指定的毫秒数
        try {
            Thread.currentThread();
            Thread.sleep(1000);//毫秒
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//		System.out.println("延时1秒");
        boolean result = readSerialPort.isPasswordFlag();
        //判断连接是否成功
        if (result == false) {
            //如果不成功，将进行10次再连接，直到有一次成功为止
            for (int i = 0; i < 10; i++) {
                readSerialPort.write(swjOutPut1);
                try {
                    Thread.currentThread();
                    Thread.sleep(1000);
//					System.out.println(i);
                } catch (InterruptedException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }//毫秒
                if (readSerialPort.isPasswordFlag()) {
                    result = readSerialPort.isPasswordFlag();
                    break;
                }
            }
        }
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        readSerialPort.setPasswordFlag(false);
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 获取采样part1部分的数据
     */
    public void getCaiyangDataPart1() throws IOException {
        int temp = 0;
        JSONObject jo = new JSONObject();
        jo.put("average1", String.valueOf(readSerialPort.getAverage1()));// 电阻1
        jo.put("average2", String.valueOf(readSerialPort.getAverage2()));// 电阻2
        jo.put("average3", String.valueOf(readSerialPort.getAverage3()));// 电压或电流
        jo.put("menu", readSerialPort.getMenuValue());// 菜单
        jo.put("uint", readSerialPort.getUnitValue());// 单位
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号： 7_3 关闭端口
     *
     * @throws IOException
     */
    public void closePort() throws IOException {
        readSerialPort.close();
        boolean result = readSerialPort.isCloseComPortFlag();
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        readSerialPort.setCloseComPortFlag(false);
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号： 8_1 提交全检量程区段
     */
    public void addQJData() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// //送检仪器证书编号
        String dw = this.getRequest().getParameter("dw");// 单位6/9/12--->M/G/T
        ArrayList<CaiYangRNRX> caiYangRNRXList = new ArrayList<CaiYangRNRX>();

        for (int i = 1; i <= 10; i++) {
            CaiYangRNRX caiYangRNRX = new CaiYangRNRX();
            caiYangRNRX.setStandardvalue(this.getRequest().getParameter(
                    "bzz" + i));
            caiYangRNRX.setReadvalue(this.getRequest().getParameter("dsz" + i));
            if (caiYangRNRX.getStandardvalue() == ""
                    || caiYangRNRX.getReadvalue() == "")
                continue;
            caiYangRNRX.setZsbh(zsbh);
            caiYangRNRX.setDw(dw);
            caiYangRNRX.setId(i);
            caiYangRNRXList.add(caiYangRNRX);
        }
        boolean result = rpService.addQJData(caiYangRNRXList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    ///////////////////////////////////

    /**
     * 方法序号： 8_1_2 提交回路电阻表中表4的值
     */
    public void addLCData() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// //送检仪器证书编号
        String dw = this.getRequest().getParameter("dw");// 单位6/9/12--->M/G/T
        String lc = this.getRequest().getParameter("lc");
        String lczhi = this.getRequest().getParameter("lczhi");
        String lc_value = this.getRequest().getParameter("lc_value");
        ArrayList<CaiYangHL> CaiYangHLList = new ArrayList<CaiYangHL>();

        for (int i = 1; i <= 10; i++) {
            CaiYangHL caiYangHL = new CaiYangHL();
            caiYangHL.setStandardvalue(this.getRequest().getParameter(
                    "bzz" + i));
            caiYangHL.setDisplayvalue(this.getRequest().getParameter("dsz" + i));
//            if (caiYangHL.getStandardvalue() == ""
//                    || caiYangHL.getDisplayvalue() == "")
//                continue;
            caiYangHL.setZsbh(zsbh);
            caiYangHL.setLc(lc);
            caiYangHL.setLczhi(lczhi);
            caiYangHL.setLc_value(lc_value);
            caiYangHL.setDw(dw);
            caiYangHL.setId(i);
            CaiYangHLList.add(caiYangHL);
        }
        boolean result = rpService.addLCData(CaiYangHLList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_2 提交非全检量程区段
     */
    public void addFQJData() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// //送检仪器证书编号
        String dw1 = this.getRequest().getParameter("dw1");// 单位6/9/12--->M/G/T
        String dw2 = this.getRequest().getParameter("dw2");// 单位6/9/12--->M/G/T
        String dw3 = this.getRequest().getParameter("dw3");// 单位6/9/12--->M/G/T
        ArrayList<CaiYangRNRX> caiYangRNRXList = new ArrayList<CaiYangRNRX>();

        for (int i = 1; i <= 9; i++) {
            CaiYangRNRX caiYangRNRX = new CaiYangRNRX();
            caiYangRNRX.setStandardvalue(this.getRequest().getParameter(
                    "bzz" + i));
            // 当该字段为空值时，在后台数据库中就插入"*---"字符串
            if (caiYangRNRX.getStandardvalue() == "") {
                caiYangRNRX.setStandardvalue("*---");
            }

            caiYangRNRX.setReadvalue(this.getRequest().getParameter("dsz" + i));
            if (caiYangRNRX.getReadvalue() == "") {
                caiYangRNRX.setReadvalue("*---");
            }
            caiYangRNRX.setZsbh(zsbh);
            if (i >= 1 && i <= 3) {
                caiYangRNRX.setDw(dw1);
            } else if (i >= 4 && i <= 6) {
                caiYangRNRX.setDw(dw2);
            } else if (i >= 7 && i <= 9) {
                caiYangRNRX.setDw(dw3);
            }
            caiYangRNRX.setId(i);
            caiYangRNRXList.add(caiYangRNRX);
//			System.out.println(caiYangRNRX.toString());
        }
        boolean result = rpService.addFQJData(caiYangRNRXList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_3 提交Part3 位置影响试验
     */
    public void addPositionEffectData() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        ArrayList<PositionEffect> positionEffectList = new ArrayList<PositionEffect>();

        for (int i = 1; i <= 3; i++) {
            PositionEffect positionEffect = new PositionEffect();
            positionEffect.setZsbh(zsbh);
            positionEffect.setLc(this.getRequest().getParameter("lc" + i));
            positionEffect.setFront(this.getRequest().getParameter(
                    "value" + i + "1"));
            positionEffect.setBack(this.getRequest().getParameter(
                    "value" + i + "2"));
            positionEffect.setLeft(this.getRequest().getParameter(
                    "value" + i + "3"));
            positionEffect.setRight(this.getRequest().getParameter(
                    "value" + i + "4"));
            positionEffect.setDw(this.getRequest().getParameter("dw" + i));// 单位1/2/3--->m/欧/k
            if (positionEffect.getLc() == "")
                positionEffect.setLc("*---");
            if (positionEffect.getFront() == "")
                positionEffect.setFront("*---");
            if (positionEffect.getBack() == "")
                positionEffect.setBack("*---");
            if (positionEffect.getLeft() == "")
                positionEffect.setLeft("*---");
            if (positionEffect.getRight() == "")
                positionEffect.setRight("*---");
            positionEffect.setId(i);
            positionEffectList.add(positionEffect);
            // System.out.println(positionEffect.toString());
        }
        boolean result = rpService.addPositionEffectData(positionEffectList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_4 提交Part4 辅助接地电阻影响试验数据
     */
    public void addAssistantData() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// //送检仪器证书编号
        ArrayList<AssistantData> assistantDataList = new ArrayList<AssistantData>();

        for (int i = 1; i <= 3; i++) {
            AssistantData assistantData = new AssistantData();
            assistantData.setZsbh(zsbh);
            assistantData.setLc(this.getRequest().getParameter("lc" + i));
            assistantData.setValue_0(this.getRequest().getParameter(
                    "value" + i + "1"));
            assistantData.setValue_500(this.getRequest().getParameter(
                    "value" + i + "2"));
            assistantData.setValue_1000(this.getRequest().getParameter(
                    "value" + i + "3"));
            assistantData.setValue_2000(this.getRequest().getParameter(
                    "value" + i + "4"));
            assistantData.setValue_5000(this.getRequest().getParameter(
                    "value" + i + "5"));
            assistantData.setDw(this.getRequest().getParameter("dw" + i));// 单位1/2/3--->m/欧/k
            if (assistantData.getLc() == "")
                assistantData.setLc("*---");
            if (assistantData.getValue_0() == "")
                assistantData.setValue_0("*---");
            if (assistantData.getValue_500() == "")
                assistantData.setValue_500("*---");
            if (assistantData.getValue_1000() == "")
                assistantData.setValue_1000("*---");
            if (assistantData.getValue_2000() == "")
                assistantData.setValue_2000("*---");
            if (assistantData.getValue_5000() == "")
                assistantData.setValue_5000("*---");
            assistantData.setId(i);
            assistantDataList.add(assistantData);
            // System.out.println(assistantData.toString());
        }
        boolean result = rpService.addAssistantData(assistantDataList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_5 提交 开路测量电压and跌落（中值）电压  BB
     */
    public void addKLDL() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");//送检仪器证书编号
        String kailu = this.getRequest().getParameter("kailu");//开路测量电压
        String dieluo = this.getRequest().getParameter("dieluo");//跌落（中值）电压

        // System.out.println();
        boolean result = rpService.addKLDL(zsbh, kailu, dieluo);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_6 提交 稳定性误差  EE
     */
    public void addWDXWC() throws Exception {
        String zsbh = this.getRequest().getParameter("zsbh");//送检仪器证书编号
        String dw = this.getRequest().getParameter("dw");//单位
        String wdxwc = this.getRequest().getParameter("wdxwc");//单位
        ArrayList<CaiYangWDXWC> caiYangWDXWCList = new ArrayList<CaiYangWDXWC>();

        for (int i = 1; i <= 6; i++) {
            CaiYangWDXWC caiYangWDXWC = new CaiYangWDXWC();
            caiYangWDXWC.setReadvalue(this.getRequest().getParameter(
                    "readvalue" + i));
//            if (caiYangWDXWC.getReadvalue() == "")
//                continue;
            caiYangWDXWC.setZsbh(zsbh);
            caiYangWDXWC.setDw(dw);
            caiYangWDXWC.setId(i);
            caiYangWDXWC.setWdxwc(wdxwc);
            caiYangWDXWCList.add(caiYangWDXWC);
        }
        boolean result = rpService.addWDXWC(caiYangWDXWCList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_7 提交 电流过冲  EE
     */
    public void addDLGC() throws Exception {
        String zsbh = this.getRequest().getParameter("zsbh");//送检仪器证书编号
        String dw = this.getRequest().getParameter("dw");//单位
//        String dlgc=this.getRequest().getParameter("dlgc");//单位
//        String gcmk=this.getRequest().getParameter("gcmk");//单位

        ArrayList<CaiYangDLGC> caiYangDLGCList = new ArrayList<CaiYangDLGC>();

        for (int i = 1; i <= 5; i++) {
            CaiYangDLGC caiYangDLGC = new CaiYangDLGC();
            caiYangDLGC.setShizhi(this.getRequest().getParameter(
                    "shizhi" + i));
            caiYangDLGC.setShijizhi(this.getRequest().getParameter(
                    "shijizhi" + i));
//            if (caiYangDLGC.getShizhi() == ""||caiYangDLGC.getShijizhi() == "")
//                continue;
            caiYangDLGC.setZsbh(zsbh);
            caiYangDLGC.setDw(dw);
            caiYangDLGC.setId(i);
//            caiYangDLGC.setDlgc(dlgc);
//            caiYangDLGC.setGcmk(gcmk);
            caiYangDLGCList.add(caiYangDLGC);
        }
        boolean result = rpService.addDLGC(caiYangDLGCList);
        String flag;
        if (result) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：8_8 提交  电阻模块标志位
     */
//    public void addDZBZW() throws IOException {
//        String jyflag = this.getRequest().getParameter("jyflag");// 绝缘电阻标志位
//        String jdflag = this.getRequest().getParameter("jdflag");// 接地电阻标志位
//        String hlflag = this.getRequest().getParameter("hlflag");// 回路电阻标志位
//        boolean result = rpService.addDZBZW(jyflag,jdflag,hlflag);// 打包json数据
//        String flag;
//        if (result) {
//            flag = "1";
//        } else {
//            flag = "0";
//        }
//        JSONObject jo = new JSONObject();
//        jo.put("jsonObject", flag);
//        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
//        this.getResponse().getWriter().print(jo);// 向前台发送json数据
//    }

    /**
     * 方法序号：8_9 查询  电阻模块标志位
     */
//    public String findDZBZW() throws IOException{
//        String result=rpService.findDZBZW();
//        JSONArray allJsonArray = new JSONArray(result);
//        JSONObject jo = new JSONObject();
//        jo.put("allJsonArray", allJsonArray);
//        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
//        this.getResponse().getWriter().print(jo);// 向前台发送json数据
//        return null;
//    }

    /**
     * 方法序号：9_1 生成绝缘电阻表原始记录证书
     */
    public void createJYOriginal() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setJydz(this.getRequest().getParameter("value2"));
        ins.setJyqd(this.getRequest().getParameter("value3"));
        ins.setXsnl(this.getRequest().getParameter("value4"));
        ins.setKlcldy(this.getRequest().getParameter("value5"));
        ins.setDldy(this.getRequest().getParameter("value6"));
        ins.setDndywdx(this.getRequest().getParameter("value7"));
        ins.setQxyyjy(this.getRequest().getParameter("value8"));

        String reaPath = this.getServletContext().getRealPath("");//得到当前应用在服务器的绝对路径
//		System.out.println(ins.toString());
        boolean result = rpService.addInspectionDecLeft(ins);// 添加绝缘电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String fullRangeData = rpService.findFullRangeDataById(zsbh);// 全检量程区段
            String notFullRangeData = rpService.findNotFullRangeDataById(zsbh);// 非全检量程区段

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("fullRangeData", fullRangeData);// 全检量程区段
            jsonObject.put("notFullRangeData", notFullRangeData);// 非全检量程区段

            WordCreation wordTest = new WordCreation();
            wordTest.createJyOriginFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_2 生成绝缘电阻表检定证书记录
     */
    public void createJYCertificate() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setJydz(this.getRequest().getParameter("value2"));
        ins.setJyqd(this.getRequest().getParameter("value3"));
        ins.setXsnl(this.getRequest().getParameter("value4"));
        ins.setKlcldy(this.getRequest().getParameter("value5"));
        ins.setDldy(this.getRequest().getParameter("value6"));
        ins.setDndywdx(this.getRequest().getParameter("value7"));
        ins.setQxyyjy(this.getRequest().getParameter("value8"));
        ins.setJdjl(this.getRequest().getParameter("value9"));

        String reaPath = this.getServletContext().getRealPath("");
//		System.out.println(ins.toString());
        boolean result = rpService.addInspectionDecLeft(ins);// 添加绝缘电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String fullRangeData = rpService.findFullRangeDataById(zsbh);// 全检量程区段
            String notFullRangeData = rpService.findNotFullRangeDataById(zsbh);// 非全检量程区段

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("fullRangeData", fullRangeData);// 全检量程区段
            jsonObject.put("notFullRangeData", notFullRangeData);// 非全检量程区段

            WordCreation wordTest = new WordCreation();
            wordTest.createJyCertifFile(reaPath, jsonObject.toString());

            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_3 生成接地电阻表原始记录证书
     */
    public void createJDOriginal() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setJydz(this.getRequest().getParameter("value2"));
        ins.setJyqd(this.getRequest().getParameter("value3"));
        ins.setTdjc(this.getRequest().getParameter("value4"));

        String reaPath = this.getServletContext().getRealPath("");
//		System.out.println(reaPath);
        boolean result = rpService.addInspectionDecLeft(ins);// 添加绝缘电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String fullRangeData = rpService.findFullRangeDataById(zsbh);// 全检量程区段
            String notFullRangeData = rpService.findNotFullRangeDataById(zsbh);// 非全检量程区段
            String positionEffectData = rpService
                    .findPositionEffectDataById(zsbh);// 位置影响试验数据
            String assistantData = rpService.findAssistantDataById(zsbh);// 辅助接地电阻影响试验数据

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("fullRangeData", fullRangeData);// 全检量程区段
            jsonObject.put("notFullRangeData", notFullRangeData);// 非全检量程区段
            jsonObject.put("positionEffectData", positionEffectData);// 位置影响试验数据
            jsonObject.put("assistantData", assistantData);// 辅助接地电阻影响试验数据

            WordCreation wordTest = new WordCreation();
            wordTest.createJdOriginFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_4 生成接地电阻表检定证书
     */
    public void createJDCertificate() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setJydz(this.getRequest().getParameter("value2"));
        ins.setJyqd(this.getRequest().getParameter("value3"));
        ins.setTdjc(this.getRequest().getParameter("value4"));
        ins.setWzyxsy(this.getRequest().getParameter("value5"));
        ins.setFzjddzyxsy(this.getRequest().getParameter("value6"));
        ins.setJdjl(this.getRequest().getParameter("value7"));

        String reaPath = this.getServletContext().getRealPath("");
        boolean result = rpService.addInspectionDecLeft(ins);// 添加绝缘电阻表剩余部分数据到数据库

        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String fullRangeData = rpService.findFullRangeDataById(zsbh);// 全检量程区段
            String notFullRangeData = rpService.findNotFullRangeDataById(zsbh);// 非全检量程区段
            // System.out.println(standardDevice);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("fullRangeData", fullRangeData);// 全检量程区段
            jsonObject.put("notFullRangeData", notFullRangeData);// 非全检量程区段
            // System.out.println(jsonObject.toString());
            WordCreation wordTest = new WordCreation();
            wordTest.createJdCertifFile(reaPath, jsonObject.toString());

            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_5 生成回路电阻表原始记录证书
     */
    public void createHLOriginal() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setFbl(this.getRequest().getParameter("value2"));
        ins.setXxwc(this.getRequest().getParameter("value3"));
        ins.setJydz(this.getRequest().getParameter("value4"));
        ins.setJyqd(this.getRequest().getParameter("value5"));
        ins.setXldl(this.getRequest().getParameter("value6"));
        ins.setWdxwc(this.getRequest().getParameter("value7"));
        ins.setDlgc(this.getRequest().getParameter("value8"));
        ins.setGcmk(this.getRequest().getParameter("value9"));
        ins.setEddlwcsj(this.getRequest().getParameter("value10"));
        ins.setEddl(this.getRequest().getParameter("value11"));
        ins.setXdkzbqdd(this.getRequest().getParameter("value12"));

        String reaPath = this.getServletContext().getRealPath("");//得到当前应用在服务器的绝对路径
        //System.out.println(ins.toString());
        ////
        boolean result = rpService.addInspectionDecLeftHl1(ins);// 添加回路电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String lc1 = "lc1";
            String lcData1 = rpService.findLCDataById(zsbh, lc1);// 量程1
            String lc2 = "lc2";
            String lcData2 = rpService.findLCDataById(zsbh, lc2);// 量程2
            String lc3 = "lc3";
            String lcData3 = rpService.findLCDataById(zsbh, lc3);// 量程3
            String lc4 = "lc4";
            String lcData4 = rpService.findLCDataById(zsbh, lc4);// 量程4
            ////////
            String lc5 = "lc5";
            String lcData5 = rpService.findLCDataById(zsbh, lc5);// 量程5
            String wdxwcData = rpService.findOneWdxwc(zsbh);// 电阻稳定性误差
            String dlgcData = rpService.findOneDlgc(zsbh);// 电流基本误差和过冲测量

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("lcData1", lcData1);// 量程1
            jsonObject.put("lcData2", lcData2);// 量程2
            jsonObject.put("lcData3", lcData3);// 量程3
            jsonObject.put("lcData4", lcData4);// 量程4
            jsonObject.put("lcData5", lcData5);// 量程5


            jsonObject.put("wdxwc", wdxwcData);// 电阻稳定性误差
            jsonObject.put("dlgc", dlgcData);// 电流基本误差和过冲测量
            //System.out.println(jsonObject);
            WordCreation wordTest = new WordCreation();
            wordTest.createHLOriginFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_6 生成回路电阻表检定证书
     */
    public void createHLCertificate() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setFbl(this.getRequest().getParameter("value2"));
        ins.setXxwc(this.getRequest().getParameter("value3"));
        ins.setJydz(this.getRequest().getParameter("value4"));
        ins.setJyqd(this.getRequest().getParameter("value5"));
        ins.setXldl(this.getRequest().getParameter("value6"));
        ins.setWdxwc(this.getRequest().getParameter("value7"));
        ins.setDlgc(this.getRequest().getParameter("value8"));
        ins.setGcmk(this.getRequest().getParameter("value9"));
        ins.setEddlwcsj(this.getRequest().getParameter("value10"));
        ins.setEddl(this.getRequest().getParameter("value11"));
        ins.setXdkzbqdd(this.getRequest().getParameter("value12"));
        ins.setJdjl(this.getRequest().getParameter("value13"));

        String reaPath = this.getServletContext().getRealPath("");//得到当前应用在服务器的绝对路径
        //System.out.println(ins.toString());
        boolean result = rpService.addInspectionDecLeftHl(ins);// 添加回路电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String lc1 = "lc1";
            String lcData1 = rpService.findLCDataById(zsbh, lc1);// 量程1
            String lc2 = "lc2";
            String lcData2 = rpService.findLCDataById(zsbh, lc2);// 量程2
            String lc3 = "lc3";
            String lcData3 = rpService.findLCDataById(zsbh, lc3);// 量程3
            String lc4 = "lc4";
            String lcData4 = rpService.findLCDataById(zsbh, lc4);// 量程4
            String lc5 = "lc5";
            String lcData5 = rpService.findLCDataById(zsbh, lc5);// 量程5
            String wdxwcData = rpService.findOneWdxwc(zsbh);// 电阻稳定性误差
            String dlgcData = rpService.findOneDlgc(zsbh);// 电流基本误差和过冲测量

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("lcData1", lcData1);// 量程1
            jsonObject.put("lcData2", lcData2);// 量程2
            jsonObject.put("lcData3", lcData3);// 量程3
            jsonObject.put("lcData4", lcData4);// 量程4
            jsonObject.put("lcData5", lcData5);// 量程5

            jsonObject.put("wdxwc", wdxwcData);// 电阻稳定性误差
            jsonObject.put("dlgc", dlgcData);// 电流基本误差和过冲测量

            WordCreation wordTest = new WordCreation();
            wordTest.createHlCertifFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }


    /**
     * 方法序号：9_7 根据某一证书编号查询其下所有回路电阻的稳定性误差
     */
    public String findWdxwcByZsh() throws IOException {
        String zsh = this.getRequest().getParameter("id");// 证书编号
        String result = rpService.findWdxwcByZsh(zsh);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    //查询稳定性误差记录
    public String findOneWdxwc() throws IOException {
        String zsh = this.getRequest().getParameter("id");// 证书编号
        String result = rpService.findOneWdxwc(zsh);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    //查询电流过冲记录
    public String findOneDlgc() throws IOException {
        String zsh = this.getRequest().getParameter("id");// 证书编号
        String result = rpService.findOneDlgc(zsh);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }


    /**
     * 方法序号：9_8 根据某一证书编号及量程查询其下所有回路电阻相关数据
     */
    public String findLCDataById() throws IOException {
        String zsh = this.getRequest().getParameter("zsh");// 证书编号
        String lc = this.getRequest().getParameter("lc");
        String result = rpService.findLCDataById(zsh, lc);// 打包json数据
        JSONArray allJsonArray = new JSONArray(result);
        JSONObject jo = new JSONObject();
        jo.put("allJsonArray", allJsonArray);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
        return null;
    }

    /**
     * 方法序号：9_9 生成直租仪原始记录证书
     */
    public void createZZYOriginal() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setFbl(this.getRequest().getParameter("value2"));
        ins.setXxwc(this.getRequest().getParameter("value3"));
        ins.setJydz(this.getRequest().getParameter("value4"));
        ins.setJyqd(this.getRequest().getParameter("value5"));
        ins.setXldl(this.getRequest().getParameter("value6"));
        ins.setWdxwc(this.getRequest().getParameter("value7"));
        ins.setDlgc(this.getRequest().getParameter("value8"));
        ins.setGcmk(this.getRequest().getParameter("value9"));
        ins.setXhgn(this.getRequest().getParameter("value10"));
        ins.setXdkzbqdd(this.getRequest().getParameter("value11"));

        String reaPath = this.getServletContext().getRealPath("");//得到当前应用在服务器的绝对路径
        //System.out.println(ins.toString());
        ////
        boolean result = rpService.addInspectionDecLeftZZY(ins);// 添加直租仪剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String lc1 = "lc1";
            String lcData1 = rpService.findLCDataById(zsbh, lc1);// 量程1
            String lc2 = "lc2";
            String lcData2 = rpService.findLCDataById(zsbh, lc2);// 量程2
            String lc3 = "lc3";
            String lcData3 = rpService.findLCDataById(zsbh, lc3);// 量程3
            String lc4 = "lc4";
            String lcData4 = rpService.findLCDataById(zsbh, lc4);// 量程4
            String lc5 = "lc5";
            String lcData5 = rpService.findLCDataById(zsbh, lc5);// 量程5
            String wdxwcData = rpService.findOneWdxwc(zsbh);// 电阻稳定性误差
            String dlgcData = rpService.findOneDlgc(zsbh);// 电流基本误差和过冲测量
            /////
            String gxfzclData = rpService.findGxfzcl(zsbh);//感性负载测量能力检定

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("lcData1", lcData1);// 量程1
            jsonObject.put("lcData2", lcData2);// 量程2
            jsonObject.put("lcData3", lcData3);// 量程3
            jsonObject.put("lcData4", lcData4);// 量程4
            jsonObject.put("lcData5", lcData5);// 量程5
            jsonObject.put("wdxwc", wdxwcData);// 电阻稳定性误差
            jsonObject.put("dlgc", dlgcData);// 电流基本误差和过冲测量

            jsonObject.put("gxfzcl", gxfzclData);//感性负载测量能力检定

            //System.out.println(jsonObject);
            WordCreation wordTest = new WordCreation();
            wordTest.createZZYOriginFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

    /**
     * 方法序号：9_10 生成直租仪检定证书
     */
    public void createZZYCertificate() throws IOException {
        String zsbh = this.getRequest().getParameter("zsbh");// 送检仪器证书编号
        InspectionDecLeft ins = new InspectionDecLeft();
        ins.setZsbh(zsbh);
        ins.setWg(this.getRequest().getParameter("value1"));
        ins.setFbl(this.getRequest().getParameter("value2"));
        ins.setXxwc(this.getRequest().getParameter("value3"));
        ins.setJydz(this.getRequest().getParameter("value4"));
        ins.setJyqd(this.getRequest().getParameter("value5"));
        ins.setXldl(this.getRequest().getParameter("value6"));
        ins.setWdxwc(this.getRequest().getParameter("value7"));
        ins.setDlgc(this.getRequest().getParameter("value8"));
        ins.setGcmk(this.getRequest().getParameter("value9"));
        ins.setXhgn(this.getRequest().getParameter("value10"));
        ins.setXdkzbqdd(this.getRequest().getParameter("value11"));
        ins.setJdjl(this.getRequest().getParameter("value12"));

        String reaPath = this.getServletContext().getRealPath("");//得到当前应用在服务器的绝对路径
        //System.out.println(ins.toString());
        boolean result = rpService.addInspectionDecLeftZZY(ins);// 添加回路电阻表剩余部分数据到数据库
        boolean p = false;
        if (result) {
            String inspectionDevice = rpService.findOneInspectionDevice(zsbh);// 送检仪器
            JSONArray jsonArray = new JSONArray(inspectionDevice);

            String standardDevLX = jsonArray.getJSONObject(0).getString(
                    "staDevLX");// 送检仪器和标准器关系
            String standardDevice = rpService
                    .findOneStandardDevice(standardDevLX);// 标准器
            String lc1 = "lc1";
            String lcData1 = rpService.findLCDataById(zsbh, lc1);// 量程1
            String lc2 = "lc2";
            String lcData2 = rpService.findLCDataById(zsbh, lc2);// 量程2
            String lc3 = "lc3";
            String lcData3 = rpService.findLCDataById(zsbh, lc3);// 量程3
            String lc4 = "lc4";
            String lcData4 = rpService.findLCDataById(zsbh, lc4);// 量程4
            String lc5 = "lc5";
            String lcData5 = rpService.findLCDataById(zsbh, lc5);// 量程5
            String wdxwcData = rpService.findOneWdxwc(zsbh);// 电阻稳定性误差
            String dlgcData = rpService.findOneDlgc(zsbh);// 电流基本误差和过冲测量
            /////
            String gxfzclData = rpService.findGxfzcl(zsbh);//感性负载测量能力检定

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("inspectionDevice", inspectionDevice);// 送检仪器
            jsonObject.put("standardDevice", standardDevice);// 标准器
            jsonObject.put("lcData1", lcData1);// 量程1
            jsonObject.put("lcData2", lcData2);// 量程2
            jsonObject.put("lcData3", lcData3);// 量程3
            jsonObject.put("lcData4", lcData4);// 量程4
            jsonObject.put("lcData5", lcData5);// 量程5

            jsonObject.put("wdxwc", wdxwcData);// 电阻稳定性误差
            jsonObject.put("dlgc", dlgcData);// 电流基本误差和过冲测量

            jsonObject.put("gxfzcl", gxfzclData);//感性负载测量能力检定

            WordCreation wordTest = new WordCreation();
            wordTest.createZZYCertifFile(reaPath, jsonObject.toString());
            p = true;
        }
        String flag;
        if (result && p) {
            flag = "1";
        } else {
            flag = "0";
        }
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", flag);
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }


    /**
     * 打开本地指定目录
     */
    public void openLocalDisk() throws IOException {
        String certificatesPath = "D:\\电阻表模板和证书\\证书";
        new CopyFile().openFolder(certificatesPath);
        JSONObject jo = new JSONObject();
        jo.put("jsonObject", "1");
        this.getResponse().setContentType("text/html;charset=UTF-8");// 设置响应数据类型
        this.getResponse().getWriter().print(jo);// 向前台发送json数据
    }

}
