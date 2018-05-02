package com.rp.service;

import java.util.ArrayList;

import com.rp.dao.RpDao;
import com.rp.model.*;

public class RpService {
	private RpDao rpDao = new RpDao();

	/**
	 * 方法序号：1 登录
	 * 
	 * @return 标记
	 */
	public String login(String username, String password) {
		try {
			return this.rpDao.login(username, password);
		} catch (Exception e) {
			System.out.println("1登录时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：2 注册
	 * 
	 * @return 标记
	 */
	public boolean register(User user) {
		try {
			this.rpDao.register(user);// 添加
		} catch (Exception e) {
			System.out.println("2注册时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：3 送检仪器信息录入
	 * 
	 * @return 标记
	 */
	public boolean addInspectionDevice(InspectionDevice inspectionDevice) {
		try {
			this.rpDao.addInspectionDevice(inspectionDevice);
		} catch (Exception e) {
			System.out.println("3送检仪器信息录入时出错！");
			e.printStackTrace();
		}
		return true;
	}
	
	/**
	 * 方法序号： 3_1验证证书编号是否存在
	 * 
	 * @return 标记
	 */
	public long verifyInspectionDeviceZSBH(String id) {
		try {
			 return this.rpDao.verifyInspectionDeviceZSBH(id);
		} catch (Exception e) {
			System.out.println("3送检仪器信息录入时出错！");
			e.printStackTrace();
		}
		return 2L;
	}

	/**
	 * 方法序号：4 查询所有送检仪器信息
	 * 
	 * @return json数组字符串
	 */
	public String findAllInspectionDevice() {
		try {
			return this.rpDao.findAllInspectionDevice();
		} catch (Exception e) {
			System.out.println("4查询所有送检仪器信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：4_0 按某种特定顺序， 查询所有送检仪器信息
	 * 
	 * @return json数组字符串
	 */
	public String findAllInspectionDeviceByOrder(String order) {
		try {
			return this.rpDao.findAllInspectionDeviceByOrder(order);
		} catch (Exception e) {
			System.out.println("4_0按某种特定顺序， 查询所有送检仪器信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：4_1 根据证书编号， 查询单条送检仪器信息
	 * 
	 * @return json数组字符串
	 */
	public String findOneInspectionDevice(String id) {
		try {
			return this.rpDao.findOneInspectionDevice(id);
		} catch (Exception e) {
			System.out.println("4_1 根据证书编号， 查询单条送检仪器信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：4_2 删除一条送检仪器信息
	 * 
	 * @return 标记
	 */
	public boolean deleteInspectionDevice(String string) {
		try {
			this.rpDao.deleteInspectionDevice(string);// 删除  //证书编号
			this.rpDao.deleteQJData(string);//删除全检量程区段
			this.rpDao.deleteFQJData(string);//删除非全检量程区段
			this.rpDao.deletePositionEffectData(string);//删除位置影响试验
			this.rpDao.deleteAssistantData(string);//删除辅助接地电阻影响试验数据
		} catch (Exception e) {
			System.out.println("4_2  删除一条送检仪器信息时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：4_3 修改一条送检仪器信息
	 * 
	 * @return 标记
	 */
	public boolean modifyInspectionDevice(InspectionDevice inspectionDevice) {
		try {
			this.rpDao.modifyInspectionDevice(inspectionDevice);
		} catch (Exception e) {
			System.out.println("4_3  修改一条送检仪器信息时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：5 标准器信息录入
	 * 
	 * @return 标记
	 */
	public boolean addStandardDevice(StandardDevice standardDevice) {
		try {
			this.rpDao.addStandardDevice(standardDevice);
		} catch (Exception e) {
			System.out.println("5 标准器信息录入时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：6 查询所有标准器信息
	 * 
	 * @return json数组字符串
	 */
	public String findAllStandardDevice() {
		try {
			return this.rpDao.findAllStandardDevice();
		} catch (Exception e) {
			System.out.println("6  查询所有标准器信息时出错！");
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 方法序号：6_0根据型号 查询一条标准器信息
	 * 
	 * @return json数组字符串
	 */
	public String findOneStandardDevice(String id) {
		try {
			return this.rpDao.findOneStandardDevice(id);
		} catch (Exception e) {
			System.out.println("6_0根据型号 查询一条标准器信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：6_1 删除标准器信息
	 * 
	 * @return 标记
	 */
	public boolean deleteStandardDevice(String string) {
		try {
			this.rpDao.deleteStandardDevice(string);// 删除
		} catch (Exception e) {
			System.out.println("6_1 删除标准器信息时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：6_2标准器信息 单条修改
	 * 
	 * @return 标记
	 */
	public boolean modifyStandardDevice(StandardDevice standardDevice) {
		try {
			this.rpDao.modifyStandardDevice(standardDevice);
		} catch (Exception e) {
			System.out.println("6_2标准器信息 单条修改时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：7_1 增加送检仪器和标准器（型号）之间的对应关系
	 * 
	 * @return 标记
	 */
//	public boolean addRelationship(String zsbh, String xh) {
//		try {
//			this.rpDao.addRelationship(zsbh, xh);
//		} catch (Exception e) {
//			System.out.println("7_1 增加送检仪器和标准器（型号）之间的对应关系时出错！");
//		}
//		return true;
//	}

	/**
	 * 方法序号：8_1 提交全检量程区段
	 */
	public boolean addQJData(ArrayList<CaiYangRNRX> caiYangRNRXList) {
		try {
			this.rpDao.deleteQJData(caiYangRNRXList.get(0).getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < caiYangRNRXList.size(); i++) { // 逐条保存信息
				this.rpDao.addQJData(caiYangRNRXList.get(i));
			}
		} catch (Exception e) {
			System.out.println("8_1 提交全检量程区段时出错！");
			e.printStackTrace();
		}
		return true;
	}

	////////////////////////////////??
	/**
	 * 方法序号：8_1_2 提交回路电阻表原始记录中的表4的值
	 */
	public boolean addLCData(ArrayList<CaiYangHL> caiYangHLList) {
		try {
			this.rpDao.deleteLCData(caiYangHLList.get(0).getZsbh(),caiYangHLList.get(0).getLc()); // 先删除该证书编号已有数据
			for (int i = 0; i < caiYangHLList.size(); i++) { // 逐条保存信息
				this.rpDao.addLCData(caiYangHLList.get(i));
			}
		} catch (Exception e) {
			System.out.println("8_1_2 提交回路电阻表中的表4的值时出错！");
			e.printStackTrace();
		}
		return true;
	}


	/**
	 * 方法序号：8_2 提交非全检量程区段
	 */
	public boolean addFQJData(ArrayList<CaiYangRNRX> caiYangRNRXList) {
		try {
			this.rpDao.deleteFQJData(caiYangRNRXList.get(0).getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < caiYangRNRXList.size(); i++) { // 逐条保存信息
				this.rpDao.addFQJData(caiYangRNRXList.get(i));
			}

		} catch (Exception e) {
			System.out.println("8_2  提交非全检量程区段时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：8_3 提交Part3 位置影响试验
	 */
	public boolean addPositionEffectData(ArrayList<PositionEffect> positionEffectList) {
		try {
			this.rpDao.deletePositionEffectData(positionEffectList.get(0)
					.getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < positionEffectList.size(); i++) { // 逐条保存信息
				this.rpDao.addPositionEffectData(positionEffectList.get(i));
			}

		} catch (Exception e) {
			System.out.println("8_3  提交Part3 位置影响试验时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：8_4 提交Part4 辅助接地电阻影响试验数据
	 */
	public boolean addAssistantData(ArrayList<AssistantData> assistantDataList) {
		try {
			this.rpDao.deleteAssistantData(assistantDataList.get(0).getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < assistantDataList.size(); i++) { // 逐条保存信息
				this.rpDao.addAssistantData(assistantDataList.get(i));
			}

		} catch (Exception e) {
			System.out.println("8_4  提交Part4 辅助接地电阻影响试验数据时出错！");
			e.printStackTrace();
		}
		return true;
	}
	
	/**
	 * 方法序号：8_5 提交 开路测量电压and跌落（中值）电压  BB
	 */
	public boolean addKLDL(String zsbh,String kailu,String dieluo) {
		try {
			this.rpDao.addKLDL(zsbh,kailu,dieluo);
		} catch (Exception e) {
			System.out.println("8_5 提交 开路测量电压and跌落（中值）电压  BB");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：8_6 提交 稳定性误差  EE
	 */
	public boolean addWDXWC(ArrayList<CaiYangWDXWC> caiYangWDXWCList) {
		try {
			this.rpDao.deleteWDXWCData(caiYangWDXWCList.get(0).getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < caiYangWDXWCList.size(); i++) { // 逐条保存信息
				this.rpDao.addWDXWC(caiYangWDXWCList.get(i));
			}
		} catch (Exception e) {
			System.out.println("8_1 提交稳定性误差时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：8_7 提交 电流过冲 EE
	 */
	public boolean addDLGC(ArrayList<CaiYangDLGC> caiYangDLGCList) {
		try {
			this.rpDao.deleteDLGCData(caiYangDLGCList.get(0).getZsbh()); // 先删除该证书编号已有数据
			for (int i = 0; i < caiYangDLGCList.size(); i++) { // 逐条保存信息
				this.rpDao.addDLGC(caiYangDLGCList.get(i));
			}
		} catch (Exception e) {
			System.out.println("8_7 提交电流过冲时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：8_8根据证书号 查询一条回路电阻的稳定性误差信息
	 *
	 * @return json数组字符串
	 */
	public String findOneWdxwc(String key) {
		try {
			return this.rpDao.findOneWdxwc(key);
		} catch (Exception e) {
			System.out.println("8_8根据证书号 查询一条回路电阻的稳定性误差信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：8_9根据证书号 查询一条回路电阻的电流过冲信息
	 *
	 * @return json数组字符串
	 */
	public String findOneDlgc(String key) {
		try {
			return this.rpDao.findOneDlgc(key);
		} catch (Exception e) {
			System.out.println("8_9根据证书号 查询一条回路电阻的电流过冲信息时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：9_1 添加绝缘电阻表剩余部分数据到数据库
	 */
	public boolean addInspectionDecLeft(InspectionDecLeft ins) {
		try {
			this.rpDao.addInspectionDecLeft(ins);
		} catch (Exception e) {
			System.out.println("9_1添加绝缘电阻表剩余部分数据到数据库时出错！");
			e.printStackTrace();
		}
		return true;
	}

	/**
	 * 方法序号：9_1_2 添加回路电阻表剩余部分数据到数据库
	 */
	public boolean addInspectionDecLeftHl(InspectionDecLeft ins) {
		try {
			this.rpDao.addInspectionDecLeftHl(ins);
		} catch (Exception e) {
			System.out.println("9_1_2添加回路电阻表剩余部分数据到数据库时出错！");
			e.printStackTrace();
		}
		return true;
	}

    /**
     * 方法序号：9_1_2_1 添加回路电阻表剩余部分数据到数据库
     */
    public boolean addInspectionDecLeftHl1(InspectionDecLeft ins) {
        try {
            this.rpDao.addInspectionDecLeftHl1(ins);
        } catch (Exception e) {
            System.out.println("9_1_2添加回路电阻表剩余部分数据到数据库时出错！");
            e.printStackTrace();
        }
        return true;
    }

	/**
	 * 方法序号：9_1_3 添加电阻表剩余部分数据到数据库 2个参数 zsbh;//送检仪器证书编号 flag;//模块选中标志位
	 */
//	public boolean addDZBZW(String jy,String jd,String hl) {
//		try {
//			this.rpDao.addDZBZW(jy,jd,hl);
//		} catch (Exception e) {
//			System.out.println("9_1_3添加电阻表剩余部分数据到数据库时出错！");
//			e.printStackTrace();
//		}
//		return true;
//	}

	/**
	 * 方法序号：9_1_4 查询模块选中标志位
	 */
//	public String findDZBZW() {
//		try {
//			return this.rpDao.findDZBZW();
//		} catch (Exception e) {
//			System.out.println("9_1_4查询模块选中标志位时出错！");
//			e.printStackTrace();
//		}
//		return null;
//	}


	/**
	 * 方法序号：9_2 根据某一证书编号查询其下所有全检量程区数据10条
	 */
	public String findFullRangeDataById(String id) {
		try {
			return this.rpDao.findFullRangeDataById(id);
		} catch (Exception e) {
			System.out.println("9_2根据某一证书编号查询其下所有全检量程区数据10条时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：9_3 根据某一证书编号查询其下所有非全检量程区数据10条
	 */
	public String findNotFullRangeDataById(String id) {
		try {
			return this.rpDao.findNotFullRangeDataById(id);
		} catch (Exception e) {
			System.out.println("9_2根据某一证书编号查询其下所有非全检量程区数据10条时出错！");
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 方法序号：9_4 根据某一证书编号查询其下所有位置影响试验数据3条
	 */
	public String findPositionEffectDataById(String id) {
		try {
			return this.rpDao.findPositionEffectDataById(id);
		} catch (Exception e) {
			System.out.println("9_4 根据某一证书编号查询其下所有位置影响试验数据3条时出错！");
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 方法序号：9_5 根据某一证书编号查询其下所有辅助接地电阻影响试验数据3条
	 */
	public String findAssistantDataById(String id) {
		try {
			return this.rpDao.findAssistantDataById(id);
		} catch (Exception e) {
			System.out.println("9_5 根据某一证书编号查询其下所有辅助接地电阻影响试验数据3条时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：9_6 根据某一证书编号及量程查询其下所有回路电阻相关数据
	 */
	public String findLCDataById(String id,String lcvalue) {
		try {
			return this.rpDao.findLCDataById(id , lcvalue);
		} catch (Exception e) {
			System.out.println("9_6 根据某一证书编号及量程查询其下所有回路电阻相关数据时出错！");
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 方法序号：9_7 根据某一证书编号查询其下所有回路电阻的稳定性误差
	 */
    public String findWdxwcByZsh(String zsh) {
        try {
            return this.rpDao.findWdxwcByZsh(zsh);
        } catch (Exception e) {
            System.out.println("9_7 根据某一证书编号查询其下所有回路电阻的稳定性误差时出错！");
            e.printStackTrace();
        }
        return null;
    }
}
