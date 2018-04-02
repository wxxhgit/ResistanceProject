/*
* 主要是part5 EE部分的操作
*/
$(function(){

    //根据标准值算出读数值,参数为字符串
    function readValue(arg) {
        arg = parseFloat(arg);
        if (arg >= 0.000000001 && arg < 0.00000001) {
            return (Math.round(arg * 1000000000) / 1000000000).toString();
        } else if (arg >= 0.00000001 && arg < 0.0000001) {
            return (Math.round(arg * 100000000) / 100000000).toString();
        } else if (arg >= 0.0000001 && arg < 0.000001) {
            return (Math.round(arg * 10000000) / 10000000).toString();
        } else if (arg >= 0.000001 && arg < 0.00001) {
            return (Math.round(arg * 1000000) / 1000000).toString();
        } else if (arg >= 0.00001 && arg < 0.0001) {
            return (Math.round(arg * 100000) / 100000).toString();
        } else if (arg >= 0.0001 && arg < 0.001) {
            return (Math.round(arg * 10000) / 10000).toString();
        } else if (arg >= 0.001 && arg < 0.01) {
            return (Math.round(arg * 1000) / 1000).toString();
        } else if (arg >= 0.01 && arg < 0.1) {
            return (Math.round(arg * 100) / 100).toString();
        } else if (arg >= 0.1 && arg < 1) {
            return (Math.round(arg * 10) / 10).toString();
        } else if (arg >= 1 && arg < 10) {
            return Math.round(arg).toString();//取整
        } else if (arg >= 10 && arg < 100) {
            return (Math.round(arg / 10) * 10).toString();
        } else if (arg >= 100 && arg < 1000) {
            return (Math.round(arg / 100) * 100).toString();
        } else if (arg >= 1000 && arg < 10000) {
            return (Math.round(arg / 1000) * 1000).toString();
        } else if (arg >= 10000 && arg < 100000) {
            return (Math.round(arg / 10000) * 10000).toString();
        } else if (arg >= 100000 && arg < 1000000) {
            return (Math.round(arg / 100000) * 100000).toString();
        } else if (arg >= 1000000 && arg < 10000000) {
            return (Math.round(arg / 1000000) * 1000000).toString();
        } else if (arg >= 10000000 && arg < 100000000) {
            return (Math.round(arg / 10000000) * 10000000).toString();
        } else if (arg >= 100000000 && arg < 1000000000) {
            return (Math.round(arg / 100000000) * 100000000).toString();
        } else if (arg >= 1000000000 && arg < 10000000000) {
            return (Math.round(arg / 1000000000) * 1000000000).toString();
        } else if (arg >= 10000000000 && arg < 100000000000) {
            return (Math.round(arg / 10000000000) * 10000000000).toString();
        } else {
            return arg;
        }
    }

    var time = 200;//延迟提交到时间ms
    var valuewei = 4;//有效位
    var danweijinzhi = 1;//μM默认为1，μ欧,用于后台传过来的值与之相乘

    /**
     * EE回路电阻菜单  Part1 量程1 开始
     */
    //获取数据 采样 全检 part1 标准值 1-1
    $("#submit5_4_11_1_1").click(function () {
        $("#part5_4_11_1_1").val("");
        $("#submit5_4_11_1_1").val("获取中...");
        setTimeout(caiyangbzz11, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 1_2
    function caiyangbzz11() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                //////
                if(parseFloat(data.average1)==0.01 || parseFloat(data.average1)==0.1){
                    danweijinzhi=1;
                }else if(parseFloat(data.average1)==1 || parseFloat(data.average1)==10
                    ||parseFloat(data.average1)==20 || parseFloat(data.average1)==100
                    ||parseFloat(data.average1)==1000){
                    danweijinzhi=1000;
                    //document.getElementById("radio5_20").checked=true;
                    $("#radio5_20").attr("checked","checked");
                    $("#radio5_19").removeAttr("checked");
                }
                $("#lc1_value").val((parseFloat(data.average1)).toString());
                $("#part5_4_11_1_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_1_2").val(readValue($("#part5_4_11_1_1").val()));
                $("#submit5_4_11_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-2
    $("#submit5_4_11_2_1").click(function () {
        $("#part5_4_11_2_1").val("");
        $("#submit5_4_11_2_1").val("获取中...");
        setTimeout(caiyangbzz12, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 2_2
    function caiyangbzz12() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_2_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_2_2").val(readValue($("#part5_4_11_2_1").val()));
                $("#submit5_4_11_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-3
    $("#submit5_4_11_3_1").click(function () {
        $("#part5_4_11_3_1").val("");
        $("#submit5_4_11_3_1").val("获取中...");
        setTimeout(caiyangbzz13, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 3_2
    function caiyangbzz13() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_3_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_3_2").val(readValue($("#part5_4_11_3_1").val()));
                $("#submit5_4_11_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-4
    $("#submit5_4_11_4_1").click(function () {
        $("#part5_4_11_4_1").val("");
        $("#submit5_4_11_4_1").val("获取中...");
        setTimeout(caiyangbzz14, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 4_2
    function caiyangbzz14() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_4_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_4_2").val(readValue($("#part5_4_11_4_1").val()));
                $("#submit5_4_11_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-5
    $("#submit5_4_11_5_1").click(function () {
        $("#part5_4_11_5_1").val("");
        $("#submit5_4_11_5_1").val("获取中...");
        setTimeout(caiyangbzz15, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 5_2
    function caiyangbzz15() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_5_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_5_2").val(readValue($("#part5_4_11_5_1").val()));
                $("#submit5_4_11_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-6
    $("#submit5_4_11_6_1").click(function () {
        $("#part5_4_11_6_1").val("");
        $("#submit5_4_11_6_1").val("获取中...");
        setTimeout(caiyangbzz16, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 6_2
    function caiyangbzz16() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_6_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_6_2").val(readValue($("#part5_4_11_6_1").val()));
                $("#submit5_4_11_6_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-7
    $("#submit5_4_11_7_1").click(function () {
        $("#part5_4_11_7_1").val("");
        $("#submit5_4_11_7_1").val("获取中...");
        setTimeout(caiyangbzz17, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 7_2
    function caiyangbzz17() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_7_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_7_2").val(readValue($("#part5_4_11_7_1").val()));
                $("#submit5_4_11_7_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-8
    $("#submit5_4_11_8_1").click(function () {
        $("#part5_4_11_8_1").val("");
        $("#submit5_4_11_8_1").val("获取中...");
        setTimeout(caiyangbzz18, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 8_2
    function caiyangbzz18() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_8_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_8_2").val(readValue($("#part5_4_11_8_1").val()));
                $("#submit5_4_11_8_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-9
    $("#submit5_4_11_9_1").click(function () {
        $("#part5_4_11_9_1").val("");
        $("#submit5_4_11_9_1").val("获取中...");
        setTimeout(caiyangbzz19, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 9_2
    function caiyangbzz19() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_9_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_9_2").val(readValue($("#part5_4_11_9_1").val()));
                $("#submit5_4_11_9_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part1 标准值 1-10
    $("#submit5_4_11_10_1").click(function () {
        $("#part5_4_11_10_1").val("");
        $("#submit5_4_11_10_1").val("获取中...");
        setTimeout(caiyangbzz110, time);//延迟500ms执行
    });
    //采样 全检 part1 显示值 10_2
    function caiyangbzz110() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_11_10_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_11_10_2").val(readValue($("#part5_4_11_10_1").val()));
                $("#submit5_4_11_10_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_4 = 1;//默认为1，μΩ
    var danweijinzhi6_4 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_19").click(function () {
        if (danwei6_4 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_4(jinzhi)
        } else if (danwei6_4 == 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_4(jinzhi)
        }
        danwei6_4 = 1;
        danweijinzhi6_4 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_20").click(function () {
        if (danwei6_4 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_4(jinzhi)
        } else if (danwei6_4 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_4(jinzhi)
        }
        danwei6_4 = 2;
        danweijinzhi6_4 = 1000;
    });

    //单位为Ω时,3
    $("#radio5_21").click(function () {
        if (danwei6_4 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_4(jinzhi)
        } else if (danwei6_4 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_4(jinzhi)
        }
        danwei6_4 = 3;
        danweijinzhi6_4 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_4(jinzhi) {
        if ($("#part5_4_11_1_1").val() != "") {
            $("#part5_4_11_1_1").val((parseFloat($("#part5_4_11_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_1_2").val() != "") {
            $("#part5_4_11_1_2").val((parseFloat($("#part5_4_11_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_2_1").val() != "") {
            $("#part5_4_11_2_1").val((parseFloat($("#part5_4_11_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_2_2").val() != "") {
            $("#part5_4_11_2_2").val((parseFloat($("#part5_4_11_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_3_1").val() != "") {
            $("#part5_4_11_3_1").val((parseFloat($("#part5_4_11_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_3_2").val() != "") {
            $("#part5_4_11_3_2").val((parseFloat($("#part5_4_11_3_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_4_1").val() != "") {
            $("#part5_4_11_4_1").val((parseFloat($("#part5_4_11_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_4_2").val() != "") {
            $("#part5_4_11_4_2").val((parseFloat($("#part5_4_11_4_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_5_1").val() != "") {
            $("#part5_4_11_5_1").val((parseFloat($("#part5_4_11_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_5_2").val() != "") {
            $("#part5_4_11_5_2").val((parseFloat($("#part5_4_11_5_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_6_1").val() != "") {
            $("#part5_4_11_6_1").val((parseFloat($("#part5_4_11_6_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_6_2").val() != "") {
            $("#part5_4_11_6_2").val((parseFloat($("#part5_4_11_6_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_7_1").val() != "") {
            $("#part5_4_11_7_1").val((parseFloat($("#part5_4_11_7_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_7_2").val() != "") {
            $("#part5_4_11_7_2").val((parseFloat($("#part5_4_11_7_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_8_1").val() != "") {
            $("#part5_4_11_8_1").val((parseFloat($("#part5_4_11_8_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_8_2").val() != "") {
            $("#part5_4_11_8_2").val((parseFloat($("#part5_4_11_8_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_9_1").val() != "") {
            $("#part5_4_11_9_1").val((parseFloat($("#part5_4_11_9_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_9_2").val() != "") {
            $("#part5_4_11_9_2").val((parseFloat($("#part5_4_11_9_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_10_1").val() != "") {
            $("#part5_4_11_10_1").val((parseFloat($("#part5_4_11_10_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_11_10_2").val() != "") {
            $("#part5_4_11_10_2").val((parseFloat($("#part5_4_11_10_2").val()) * jinzhi).toString());
        }
    }

    var lc1="lc1";
    //提交量程1
    $("#submit5_18").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addLCData.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                    "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                    "dw": $("input[name='check5_7']:checked").val(),//单位1/2/3--->mΩ/Ω/kΩ
                    "bzz1": $("#part5_4_11_1_1").val(),//标准值
                    "dsz1": $("#part5_4_11_1_2").val(),//显示值
                    "bzz2": $("#part5_4_11_2_1").val(),
                    "dsz2": $("#part5_4_11_2_2").val(),
                    "bzz3": $("#part5_4_11_3_1").val(),
                    "dsz3": $("#part5_4_11_3_2").val(),
                    "bzz4": $("#part5_4_11_4_1").val(),
                    "dsz4": $("#part5_4_11_4_2").val(),
                    "bzz5": $("#part5_4_11_5_1").val(),
                    "dsz5": $("#part5_4_11_5_2").val(),
                    "bzz6": $("#part5_4_11_6_1").val(),
                    "dsz6": $("#part5_4_11_6_2").val(),
                    "bzz7": $("#part5_4_11_7_1").val(),
                    "dsz7": $("#part5_4_11_7_2").val(),
                    "bzz8": $("#part5_4_11_8_1").val(),
                    "dsz8": $("#part5_4_11_8_2").val(),
                    "bzz9": $("#part5_4_11_9_1").val(),
                    "dsz9": $("#part5_4_11_9_2").val(),
                    "bzz10": $("#part5_4_11_10_1").val(),
                    "dsz10": $("#part5_4_11_10_2").val(),
                    ///
                    "lc": lc1
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_1").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=lc1的文本框清空，以便重新下一次填充
    $("#submit5_19").click(function () {
        $("input[name='lc1']").val(""); // 将name=lc1的文本框清空，以便重新下一次修改
        $("input[name='lc1']").removeAttr("title");
        $("input[name='lc1']").css("background", "white"); // 清除红色标记
        $("input[name='lc1_value']").val(""); // 将name=lc1_value的文本框清空，以便重新下一次修改
        $("input[name='lc1_value']").removeAttr("title");
        $("input[name='lc1_value']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_1").html("");
    });
    /**
     * EE回路电阻菜单  Part1 量程1 结束
     */

    /**
     * EE回路电阻菜单  Part2 量程2 开始
     */
    //获取数据 采样 全检 part2 标准值 2-1
    $("#submit5_4_12_1_1").click(function () {
        $("#part5_4_12_1_1").val("");
        $("#submit5_4_12_1_1").val("获取中...");
        setTimeout(caiyangbzz21, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 1_2
    function caiyangbzz21() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                if(parseFloat(data.average1)==0.01 || parseFloat(data.average1)==0.1){
                    danweijinzhi=1;
                }else if(parseFloat(data.average1)==1 || parseFloat(data.average1)==10
                    ||parseFloat(data.average1)==20 || parseFloat(data.average1)==100
                    ||parseFloat(data.average1)==1000){
                    danweijinzhi=1000;
                    $("#radio5_23").attr("checked","checked");
                    $("#radio5_22").removeAttr("checked");
                }
                $("#lc2_value").val((parseFloat(data.average1)).toString());
                $("#part5_4_12_1_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_1_2").val(readValue($("#part5_4_12_1_1").val()));
                $("#submit5_4_12_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-2
    $("#submit5_4_12_2_1").click(function () {
        $("#part5_4_12_2_1").val("");
        $("#submit5_4_12_2_1").val("获取中...");
        setTimeout(caiyangbzz22, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 2_2
    function caiyangbzz22() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_2_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_2_2").val(readValue($("#part5_4_12_2_1").val()));
                $("#submit5_4_12_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-3
    $("#submit5_4_12_3_1").click(function () {
        $("#part5_4_12_3_1").val("");
        $("#submit5_4_12_3_1").val("获取中...");
        setTimeout(caiyangbzz23, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 3_2
    function caiyangbzz23() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_3_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_3_2").val(readValue($("#part5_4_12_3_1").val()));
                $("#submit5_4_12_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-4
    $("#submit5_4_12_4_1").click(function () {
        $("#part5_4_12_4_1").val("");
        $("#submit5_4_12_4_1").val("获取中...");
        setTimeout(caiyangbzz24, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 4_2
    function caiyangbzz24() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_4_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_4_2").val(readValue($("#part5_4_12_4_1").val()));
                $("#submit5_4_12_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-5
    $("#submit5_4_12_5_1").click(function () {
        $("#part5_4_12_5_1").val("");
        $("#submit5_4_12_5_1").val("获取中...");
        setTimeout(caiyangbzz25, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 5_2
    function caiyangbzz25() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_5_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_5_2").val(readValue($("#part5_4_12_5_1").val()));
                $("#submit5_4_12_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-6
    $("#submit5_4_12_6_1").click(function () {
        $("#part5_4_12_6_1").val("");
        $("#submit5_4_12_6_1").val("获取中...");
        setTimeout(caiyangbzz26, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 6_2
    function caiyangbzz26() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_6_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_6_2").val(readValue($("#part5_4_12_6_1").val()));
                $("#submit5_4_12_6_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-7
    $("#submit5_4_12_7_1").click(function () {
        $("#part5_4_12_7_1").val("");
        $("#submit5_4_12_7_1").val("获取中...");
        setTimeout(caiyangbzz27, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 7_2
    function caiyangbzz27() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_7_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_7_2").val(readValue($("#part5_4_12_7_1").val()));
                $("#submit5_4_12_7_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-8
    $("#submit5_4_12_8_1").click(function () {
        $("#part5_4_12_8_1").val("");
        $("#submit5_4_12_8_1").val("获取中...");
        setTimeout(caiyangbzz28, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 8_2
    function caiyangbzz28() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_8_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_8_2").val(readValue($("#part5_4_12_8_1").val()));
                $("#submit5_4_12_8_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-9
    $("#submit5_4_12_9_1").click(function () {
        $("#part5_4_12_9_1").val("");
        $("#submit5_4_12_9_1").val("获取中...");
        setTimeout(caiyangbzz29, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 9_2
    function caiyangbzz29() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_9_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_9_2").val(readValue($("#part5_4_12_9_1").val()));
                $("#submit5_4_12_9_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part2 标准值 2-10
    $("#submit5_4_12_10_1").click(function () {
        $("#part5_4_12_10_1").val("");
        $("#submit5_4_12_10_1").val("获取中...");
        setTimeout(caiyangbzz210, time);//延迟500ms执行
    });
    //采样 全检 part2 显示值 10_2
    function caiyangbzz210() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_12_10_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_12_10_2").val(readValue($("#part5_4_12_10_1").val()));
                $("#submit5_4_12_10_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_5 = 1;//默认为1，μΩ
    var danweijinzhi6_5 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_22").click(function () {
        if (danwei6_5 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_5(jinzhi)
        } else if (danwei6_5 == 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_5(jinzhi)
        }
        danwei6_5 = 1;
        danweijinzhi6_5 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_23").click(function () {
        if (danwei6_5 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_5(jinzhi)
        } else if (danwei6_5 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_5(jinzhi)
        }
        danwei6_5 = 2;
        danweijinzhi6_5 = 1000;
    });

    //单位为Ω时,3
    $("#radio5_24").click(function () {
        if (danwei6_5 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_5(jinzhi)
        } else if (danwei6_5 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_5(jinzhi)
        }
        danwei6_5 = 3;
        danweijinzhi6_5 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_5(jinzhi) {
        if ($("#part5_4_12_1_1").val() != "") {
            $("#part5_4_12_1_1").val((parseFloat($("#part5_4_12_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_1_2").val() != "") {
            $("#part5_4_12_1_2").val((parseFloat($("#part5_4_12_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_2_1").val() != "") {
            $("#part5_4_12_2_1").val((parseFloat($("#part5_4_12_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_2_2").val() != "") {
            $("#part5_4_12_2_2").val((parseFloat($("#part5_4_12_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_3_1").val() != "") {
            $("#part5_4_12_3_1").val((parseFloat($("#part5_4_12_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_3_2").val() != "") {
            $("#part5_4_12_3_2").val((parseFloat($("#part5_4_12_3_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_4_1").val() != "") {
            $("#part5_4_12_4_1").val((parseFloat($("#part5_4_12_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_4_2").val() != "") {
            $("#part5_4_12_4_2").val((parseFloat($("#part5_4_12_4_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_5_1").val() != "") {
            $("#part5_4_12_5_1").val((parseFloat($("#part5_4_12_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_5_2").val() != "") {
            $("#part5_4_12_5_2").val((parseFloat($("#part5_4_12_5_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_6_1").val() != "") {
            $("#part5_4_11_6_1").val((parseFloat($("#part5_4_12_6_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_6_2").val() != "") {
            $("#part5_4_12_6_2").val((parseFloat($("#part5_4_12_6_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_7_1").val() != "") {
            $("#part5_4_12_7_1").val((parseFloat($("#part5_4_12_7_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_7_2").val() != "") {
            $("#part5_4_12_7_2").val((parseFloat($("#part5_4_12_7_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_8_1").val() != "") {
            $("#part5_4_12_8_1").val((parseFloat($("#part5_4_12_8_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_8_2").val() != "") {
            $("#part5_4_12_8_2").val((parseFloat($("#part5_4_12_8_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_9_1").val() != "") {
            $("#part5_4_12_9_1").val((parseFloat($("#part5_4_12_9_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_9_2").val() != "") {
            $("#part5_4_12_9_2").val((parseFloat($("#part5_4_12_9_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_10_1").val() != "") {
            $("#part5_4_12_10_1").val((parseFloat($("#part5_4_12_10_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_12_10_2").val() != "") {
            $("#part5_4_12_10_2").val((parseFloat($("#part5_4_12_10_2").val()) * jinzhi).toString());
        }
    }

    var lc2="lc2";
    //提交量程2
    $("#submit5_20").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addLCData.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                    "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                    "dw": $("input[name='check5_8']:checked").val(),//单位1/2/3--->mΩ/Ω/kΩ
                    "bzz1": $("#part5_4_12_1_1").val(),//标准值
                    "dsz1": $("#part5_4_12_1_2").val(),//显示值
                    "bzz2": $("#part5_4_12_2_1").val(),
                    "dsz2": $("#part5_4_12_2_2").val(),
                    "bzz3": $("#part5_4_12_3_1").val(),
                    "dsz3": $("#part5_4_12_3_2").val(),
                    "bzz4": $("#part5_4_12_4_1").val(),
                    "dsz4": $("#part5_4_12_4_2").val(),
                    "bzz5": $("#part5_4_12_5_1").val(),
                    "dsz5": $("#part5_4_12_5_2").val(),
                    "bzz6": $("#part5_4_12_6_1").val(),
                    "dsz6": $("#part5_4_12_6_2").val(),
                    "bzz7": $("#part5_4_12_7_1").val(),
                    "dsz7": $("#part5_4_12_7_2").val(),
                    "bzz8": $("#part5_4_12_8_1").val(),
                    "dsz8": $("#part5_4_12_8_2").val(),
                    "bzz9": $("#part5_4_12_9_1").val(),
                    "dsz9": $("#part5_4_12_9_2").val(),
                    "bzz10": $("#part5_4_12_10_1").val(),
                    "dsz10": $("#part5_4_12_10_2").val(),
                    "lc": lc2
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_2").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=lc2的文本框清空，以便重新下一次填充
    $("#submit5_21").click(function () {
        $("input[name='lc2']").val(""); // 将name=lc2的文本框清空，以便重新下一次修改
        $("input[name='lc2']").removeAttr("title");
        $("input[name='lc2']").css("background", "white"); // 清除红色标记
        $("input[name='lc2_value']").val(""); // 将name=lc2_value的文本框清空，以便重新下一次修改
        $("input[name='lc2_value']").removeAttr("title");
        $("input[name='lc2_value']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_2").html("");
    });
    /**
     * EE回路电阻菜单  Part2 量程2 结束
     */

    /**
     * EE回路电阻菜单  Part3 量程3 开始
     */
    //获取数据 采样 全检 part3 标准值 3-1
    $("#submit5_4_13_1_1").click(function () {
        $("#part5_4_13_1_1").val("");
        $("#submit5_4_13_1_1").val("获取中...");
        setTimeout(caiyangbzz31, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 1_2
    function caiyangbzz31() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                if(parseFloat(data.average1)==0.01 || parseFloat(data.average1)==0.1){
                    danweijinzhi=1;
                }else if(parseFloat(data.average1)==1 || parseFloat(data.average1)==10
                    ||parseFloat(data.average1)==20 || parseFloat(data.average1)==100
                    ||parseFloat(data.average1)==1000){
                    danweijinzhi=1000;
                    $("#radio5_26").attr("checked","checked");
                    $("#radio5_25").removeAttr("checked");
                }
                $("#lc3_value").val((parseFloat(data.average1)).toString());
                $("#part5_4_13_1_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_1_2").val(readValue($("#part5_4_13_1_1").val()));
                $("#submit5_4_13_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-2
    $("#submit5_4_13_2_1").click(function () {
        $("#part5_4_13_2_1").val("");
        $("#submit5_4_13_2_1").val("获取中...");
        setTimeout(caiyangbzz32, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 2_2
    function caiyangbzz32() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_2_1").val(( + parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_2_2").val(readValue($("#part5_4_13_2_1").val()));
                $("#submit5_4_13_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-3
    $("#submit5_4_13_3_1").click(function () {
        $("#part5_4_13_3_1").val("");
        $("#submit5_4_13_3_1").val("获取中...");
        setTimeout(caiyangbzz33, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 3_2
    function caiyangbzz33() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_3_1").val(( + parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_3_2").val(readValue($("#part5_4_13_3_1").val()));
                $("#submit5_4_13_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-4
    $("#submit5_4_13_4_1").click(function () {
        $("#part5_4_13_4_1").val("");
        $("#submit5_4_13_4_1").val("获取中...");
        setTimeout(caiyangbzz34, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 4_2
    function caiyangbzz34() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_4_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_4_2").val(readValue($("#part5_4_13_4_1").val()));
                $("#submit5_4_13_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-5
    $("#submit5_4_13_5_1").click(function () {
        $("#part5_4_13_5_1").val("");
        $("#submit5_4_13_5_1").val("获取中...");
        setTimeout(caiyangbzz35, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 5_2
    function caiyangbzz35() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_5_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_5_2").val(readValue($("#part5_4_13_5_1").val()));
                $("#submit5_4_13_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-6
    $("#submit5_4_13_6_1").click(function () {
        $("#part5_4_13_6_1").val("");
        $("#submit5_4_13_6_1").val("获取中...");
        setTimeout(caiyangbzz36, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 6_2
    function caiyangbzz36() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_6_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_6_2").val(readValue($("#part5_4_13_6_1").val()));
                $("#submit5_4_13_6_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-7
    $("#submit5_4_13_7_1").click(function () {
        $("#part5_4_13_7_1").val("");
        $("#submit5_4_13_7_1").val("获取中...");
        setTimeout(caiyangbzz37, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 7_2
    function caiyangbzz37() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_7_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_7_2").val(readValue($("#part5_4_13_7_1").val()));
                $("#submit5_4_13_7_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-8
    $("#submit5_4_13_8_1").click(function () {
        $("#part5_4_13_8_1").val("");
        $("#submit5_4_13_8_1").val("获取中...");
        setTimeout(caiyangbzz38, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 8_2
    function caiyangbzz38() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_8_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_8_2").val(readValue($("#part5_4_13_8_1").val()));
                $("#submit5_4_13_8_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-9
    $("#submit5_4_13_9_1").click(function () {
        $("#part5_4_13_9_1").val("");
        $("#submit5_4_13_9_1").val("获取中...");
        setTimeout(caiyangbzz39, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 9_2
    function caiyangbzz39() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_9_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_9_2").val(readValue($("#part5_4_13_9_1").val()));
                $("#submit5_4_13_9_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part3 标准值 3-10
    $("#submit5_4_13_10_1").click(function () {
        $("#part5_4_13_10_1").val("");
        $("#submit5_4_13_10_1").val("获取中...");
        setTimeout(caiyangbzz310, time);//延迟500ms执行
    });
    //采样 全检 part3 显示值 10_2
    function caiyangbzz310() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_13_10_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_13_10_2").val(readValue($("#part5_4_13_10_1").val()));
                $("#submit5_4_13_10_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_6 = 1;//默认为1，μΩ
    var danweijinzhi6_6 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_25").click(function () {
        if (danwei6_6 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_6(jinzhi)
        } else if (danwei6_6== 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_6(jinzhi)
        }
        danwei6_6 = 1;
        danweijinzhi6_6 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_26").click(function () {
        if (danwei6_6 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_6(jinzhi)
        } else if (danwei6_6 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_6(jinzhi)
        }
        danwei6_6 = 2;
        danweijinzhi6_6 = 1000;
    });

    //单位为Ω时,3
    $("#radio5_27").click(function () {
        if (danwei6_6 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_6(jinzhi)
        } else if (danwei6_6 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_6(jinzhi)
        }
        danwei6_6 = 3;
        danweijinzhi6_6 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_6(jinzhi) {
        if ($("#part5_4_13_1_1").val() != "") {
            $("#part5_4_13_1_1").val((parseFloat($("#part5_4_13_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_1_2").val() != "") {
            $("#part5_4_13_1_2").val((parseFloat($("#part5_4_13_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_2_1").val() != "") {
            $("#part5_4_13_2_1").val((parseFloat($("#part5_4_13_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_2_2").val() != "") {
            $("#part5_4_13_2_2").val((parseFloat($("#part5_4_13_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_3_1").val() != "") {
            $("#part5_4_13_3_1").val((parseFloat($("#part5_4_13_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_3_2").val() != "") {
            $("#part5_4_13_3_2").val((parseFloat($("#part5_4_13_3_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_4_1").val() != "") {
            $("#part5_4_13_4_1").val((parseFloat($("#part5_4_13_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_4_2").val() != "") {
            $("#part5_4_13_4_2").val((parseFloat($("#part5_4_13_4_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_5_1").val() != "") {
            $("#part5_4_13_5_1").val((parseFloat($("#part5_4_13_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_5_2").val() != "") {
            $("#part5_4_13_5_2").val((parseFloat($("#part5_4_13_5_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_6_1").val() != "") {
            $("#part5_4_13_6_1").val((parseFloat($("#part5_4_13_6_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_6_2").val() != "") {
            $("#part5_4_13_6_2").val((parseFloat($("#part5_4_13_6_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_7_1").val() != "") {
            $("#part5_4_13_7_1").val((parseFloat($("#part5_4_13_7_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_7_2").val() != "") {
            $("#part5_4_13_7_2").val((parseFloat($("#part5_4_13_7_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_8_1").val() != "") {
            $("#part5_4_13_8_1").val((parseFloat($("#part5_4_13_8_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_8_2").val() != "") {
            $("#part5_4_13_8_2").val((parseFloat($("#part5_4_13_8_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_9_1").val() != "") {
            $("#part5_4_13_9_1").val((parseFloat($("#part5_4_13_9_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_9_2").val() != "") {
            $("#part5_4_13_9_2").val((parseFloat($("#part5_4_13_9_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_10_1").val() != "") {
            $("#part5_4_13_10_1").val((parseFloat($("#part5_4_13_10_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_13_10_2").val() != "") {
            $("#part5_4_13_10_2").val((parseFloat($("#part5_4_13_10_2").val()) * jinzhi).toString());
        }
    }

    var lc3="lc3";
    //提交量程3
    $("#submit5_22").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addLCData.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                    "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                    "dw": $("input[name='check5_9']:checked").val(),//单位1/2/3--->mΩ/Ω/kΩ
                    "bzz1": $("#part5_4_13_1_1").val(),//标准值
                    "dsz1": $("#part5_4_13_1_2").val(),//显示值
                    "bzz2": $("#part5_4_13_2_1").val(),
                    "dsz2": $("#part5_4_13_2_2").val(),
                    "bzz3": $("#part5_4_13_3_1").val(),
                    "dsz3": $("#part5_4_13_3_2").val(),
                    "bzz4": $("#part5_4_13_4_1").val(),
                    "dsz4": $("#part5_4_13_4_2").val(),
                    "bzz5": $("#part5_4_13_5_1").val(),
                    "dsz5": $("#part5_4_13_5_2").val(),
                    "bzz6": $("#part5_4_13_6_1").val(),
                    "dsz6": $("#part5_4_13_6_2").val(),
                    "bzz7": $("#part5_4_13_7_1").val(),
                    "dsz7": $("#part5_4_13_7_2").val(),
                    "bzz8": $("#part5_4_13_8_1").val(),
                    "dsz8": $("#part5_4_13_8_2").val(),
                    "bzz9": $("#part5_4_13_9_1").val(),
                    "dsz9": $("#part5_4_13_9_2").val(),
                    "bzz10": $("#part5_4_13_10_1").val(),
                    "dsz10": $("#part5_4_13_10_2").val(),
                    "lc": lc3
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_3").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=lc3的文本框清空，以便重新下一次填充
    $("#submit5_23").click(function () {
        $("input[name='lc3']").val(""); // 将name=lc3的文本框清空，以便重新下一次修改
        $("input[name='lc3']").removeAttr("title");
        $("input[name='lc3']").css("background", "white"); // 清除红色标记
        $("input[name='lc3_value']").val(""); // 将name=lc3_value的文本框清空，以便重新下一次修改
        $("input[name='lc3_value']").removeAttr("title");
        $("input[name='lc3_value']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_3").html("");
    });
    /**
     * EE回路电阻菜单  Part3 量程3 结束
     */

    /**
     * EE回路电阻菜单  Part4 量程4 开始
     */
    //获取数据 采样 全检 part4 标准值 4-1
    $("#submit5_4_14_1_1").click(function () {
        $("#part5_4_14_1_1").val("");
        $("#submit5_4_14_1_1").val("获取中...");
        setTimeout(caiyangbzz41, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 1_2
    function caiyangbzz41() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                if(parseFloat(data.average1)==0.01 || parseFloat(data.average1)==0.1){
                    danweijinzhi=1;
                }else if(parseFloat(data.average1)==1 || parseFloat(data.average1)==10
                    ||parseFloat(data.average1)==20 || parseFloat(data.average1)==100
                    ||parseFloat(data.average1)==1000){
                    danweijinzhi=1000;
                    $("#radio5_29").attr("checked","checked");
                    $("#radio5_28").removeAttr("checked");
                }
                $("#lc4_value").val((parseFloat(data.average1)).toString());
                $("#part5_4_14_1_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_1_2").val(readValue($("#part5_4_14_1_1").val()));
                $("#submit5_4_14_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-2
    $("#submit5_4_14_2_1").click(function () {
        $("#part5_4_14_2_1").val("");
        $("#submit5_4_14_2_1").val("获取中...");
        setTimeout(caiyangbzz42, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 2_2
    function caiyangbzz42() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_2_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_2_2").val(readValue($("#part5_4_14_2_1").val()));
                $("#submit5_4_14_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-3
    $("#submit5_4_14_3_1").click(function () {
        $("#part5_4_14_3_1").val("");
        $("#submit5_4_14_3_1").val("获取中...");
        setTimeout(caiyangbzz43, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 3_2
    function caiyangbzz43() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_3_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_3_2").val(readValue($("#part5_4_14_3_1").val()));
                $("#submit5_4_14_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-4
    $("#submit5_4_14_4_1").click(function () {
        $("#part5_4_14_4_1").val("");
        $("#submit5_4_14_4_1").val("获取中...");
        setTimeout(caiyangbzz44, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 4_2
    function caiyangbzz44() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_4_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_4_2").val(readValue($("#part5_4_14_4_1").val()));
                $("#submit5_4_14_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-5
    $("#submit5_4_14_5_1").click(function () {
        $("#part5_4_14_5_1").val("");
        $("#submit5_4_14_5_1").val("获取中...");
        setTimeout(caiyangbzz45, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 5_2
    function caiyangbzz45() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_5_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_5_2").val(readValue($("#part5_4_14_5_1").val()));
                $("#submit5_4_14_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-6
    $("#submit5_4_14_6_1").click(function () {
        $("#part5_4_14_6_1").val("");
        $("#submit5_4_14_6_1").val("获取中...");
        setTimeout(caiyangbzz46, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 6_2
    function caiyangbzz46() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_6_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_6_2").val(readValue($("#part5_4_14_6_1").val()));
                $("#submit5_4_14_6_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-7
    $("#submit5_4_14_7_1").click(function () {
        $("#part5_4_14_7_1").val("");
        $("#submit5_4_14_7_1").val("获取中...");
        setTimeout(caiyangbzz47, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 7_2
    function caiyangbzz47() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_7_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_7_2").val(readValue($("#part5_4_14_7_1").val()));
                $("#submit5_4_14_7_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-8
    $("#submit5_4_14_8_1").click(function () {
        $("#part5_4_14_8_1").val("");
        $("#submit5_4_14_8_1").val("获取中...");
        setTimeout(caiyangbzz48, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 8_2
    function caiyangbzz48() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_8_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_8_2").val(readValue($("#part5_4_14_8_1").val()));
                $("#submit5_4_14_8_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-9
    $("#submit5_4_14_9_1").click(function () {
        $("#part5_4_14_9_1").val("");
        $("#submit5_4_14_9_1").val("获取中...");
        setTimeout(caiyangbzz49, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 9_2
    function caiyangbzz49() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_9_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_9_2").val(readValue($("#part5_4_14_9_1").val()));
                $("#submit5_4_14_9_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part4 标准值 4-10
    $("#submit5_4_14_10_1").click(function () {
        $("#part5_4_14_10_1").val("");
        $("#submit5_4_14_10_1").val("获取中...");
        setTimeout(caiyangbzz410, time);//延迟500ms执行
    });
    //采样 全检 part4 显示值 10_2
    function caiyangbzz410() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_14_10_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_14_10_2").val(readValue($("#part5_4_14_10_1").val()));
                $("#submit5_4_14_10_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_7 = 1;//默认为1，μΩ
    var danweijinzhi6_7 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_28").click(function () {
        if (danwei6_7 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_7(jinzhi)
        } else if (danwei6_7== 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_7(jinzhi)
        }
        danwei6_7 = 1;
        danweijinzhi6_7 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_29").click(function () {
        if (danwei6_7 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_7(jinzhi)
        } else if (danwei6_7 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_7(jinzhi)
        }
        danwei6_7 = 2;
        danweijinzhi6_7 = 1000;
    });

    //单位为KΩ时,3
    $("#radio5_30").click(function () {
        if (danwei6_7 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_7(jinzhi)
        } else if (danwei6_7 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_7(jinzhi)
        }
        danwei6_7 = 3;
        danweijinzhi6_7 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_7(jinzhi) {
        if ($("#part5_4_14_1_1").val() != "") {
            $("#part5_4_14_1_1").val((parseFloat($("#part5_4_14_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_1_2").val() != "") {
            $("#part5_4_14_1_2").val((parseFloat($("#part5_4_14_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_2_1").val() != "") {
            $("#part5_4_14_2_1").val((parseFloat($("#part5_4_14_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_2_2").val() != "") {
            $("#part5_4_14_2_2").val((parseFloat($("#part5_4_14_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_3_1").val() != "") {
            $("#part5_4_14_3_1").val((parseFloat($("#part5_4_14_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_3_2").val() != "") {
            $("#part5_4_14_3_2").val((parseFloat($("#part5_4_14_3_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_4_1").val() != "") {
            $("#part5_4_14_4_1").val((parseFloat($("#part5_4_14_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_4_2").val() != "") {
            $("#part5_4_14_4_2").val((parseFloat($("#part5_4_14_4_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_5_1").val() != "") {
            $("#part5_4_14_5_1").val((parseFloat($("#part5_4_14_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_5_2").val() != "") {
            $("#part5_4_14_5_2").val((parseFloat($("#part5_4_14_5_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_6_1").val() != "") {
            $("#part5_4_14_6_1").val((parseFloat($("#part5_4_14_6_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_6_2").val() != "") {
            $("#part5_4_14_6_2").val((parseFloat($("#part5_4_14_6_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_7_1").val() != "") {
            $("#part5_4_14_7_1").val((parseFloat($("#part5_4_14_7_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_7_2").val() != "") {
            $("#part5_4_14_7_2").val((parseFloat($("#part5_4_14_7_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_8_1").val() != "") {
            $("#part5_4_14_8_1").val((parseFloat($("#part5_4_14_8_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_8_2").val() != "") {
            $("#part5_4_14_8_2").val((parseFloat($("#part5_4_14_8_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_9_1").val() != "") {
            $("#part5_4_14_9_1").val((parseFloat($("#part5_4_14_9_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_9_2").val() != "") {
            $("#part5_4_14_9_2").val((parseFloat($("#part5_4_14_9_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_10_1").val() != "") {
            $("#part5_4_14_10_1").val((parseFloat($("#part5_4_14_10_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_14_10_2").val() != "") {
            $("#part5_4_14_10_2").val((parseFloat($("#part5_4_14_10_2").val()) * jinzhi).toString());
        }
    }

    var lc4="lc4";
    //提交量程4
    $("#submit5_24").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addLCData.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                    "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                    "dw": $("input[name='check5_10']:checked").val(),//单位1/2/3--->mΩ/Ω/kΩ
                    "bzz1": $("#part5_4_14_1_1").val(),//标准值
                    "dsz1": $("#part5_4_14_1_2").val(),//显示值
                    "bzz2": $("#part5_4_14_2_1").val(),
                    "dsz2": $("#part5_4_14_2_2").val(),
                    "bzz3": $("#part5_4_14_3_1").val(),
                    "dsz3": $("#part5_4_14_3_2").val(),
                    "bzz4": $("#part5_4_14_4_1").val(),
                    "dsz4": $("#part5_4_14_4_2").val(),
                    "bzz5": $("#part5_4_14_5_1").val(),
                    "dsz5": $("#part5_4_14_5_2").val(),
                    "bzz6": $("#part5_4_14_6_1").val(),
                    "dsz6": $("#part5_4_14_6_2").val(),
                    "bzz7": $("#part5_4_14_7_1").val(),
                    "dsz7": $("#part5_4_14_7_2").val(),
                    "bzz8": $("#part5_4_14_8_1").val(),
                    "dsz8": $("#part5_4_14_8_2").val(),
                    "bzz9": $("#part5_4_14_9_1").val(),
                    "dsz9": $("#part5_4_14_9_2").val(),
                    "bzz10": $("#part5_4_14_10_1").val(),
                    "dsz10": $("#part5_4_14_10_2").val(),
                    "lc": lc4
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_4").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=lc1的文本框清空，以便重新下一次填充
    $("#submit5_25").click(function () {
        $("input[name='lc4']").val(""); // 将name=lc4的文本框清空，以便重新下一次修改
        $("input[name='lc4']").removeAttr("title");
        $("input[name='lc4']").css("background", "white"); // 清除红色标记
        $("input[name='lc4_value']").val(""); // 将name=lc4_value的文本框清空，以便重新下一次修改
        $("input[name='lc4_value']").removeAttr("title");
        $("input[name='lc4_value']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_4").html("");
    });
    /**
     * EE回路电阻菜单  Part4 量程4 结束
     */

    /**
     * EE回路电阻菜单  Part5 量程5 开始
     */
    //获取数据 采样 全检 part5 标准值 5-1
    $("#submit5_4_15_1_1").click(function () {
        $("#part5_4_15_1_1").val("");
        $("#submit5_4_15_1_1").val("获取中...");
        setTimeout(caiyangbzz51, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 1_2
    function caiyangbzz51() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                if(parseFloat(data.average1)==0.01 || parseFloat(data.average1)==0.1){
                    danweijinzhi=1;
                }else if(parseFloat(data.average1)==1 || parseFloat(data.average1)==10
                    ||parseFloat(data.average1)==20 || parseFloat(data.average1)==100
                    ||parseFloat(data.average1)==1000){
                    danweijinzhi=1000;
                    $("#radio5_32").attr("checked","checked");
                    $("#radio5_31").removeAttr("checked");
                }
                $("#lc5_value").val((parseFloat(data.average1)).toString());
                $("#part5_4_15_1_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_1_2").val(readValue($("#part5_4_15_1_1").val()));
                $("#submit5_4_15_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-2
    $("#submit5_4_15_2_1").click(function () {
        $("#part5_4_15_2_1").val("");
        $("#submit5_4_15_2_1").val("获取中...");
        setTimeout(caiyangbzz52, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 2_2
    function caiyangbzz52() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_2_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_2_2").val(readValue($("#part5_4_15_2_1").val()));
                $("#submit5_4_15_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-3
    $("#submit5_4_15_3_1").click(function () {
        $("#part5_4_15_3_1").val("");
        $("#submit5_4_15_3_1").val("获取中...");
        setTimeout(caiyangbzz53, time);//延迟500ms执行
    });
    //采样 全检 part5 显 示值 3_2
    function caiyangbzz53() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_3_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_3_2").val(readValue($("#part5_4_15_3_1").val()));
                $("#submit5_4_15_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-4
    $("#submit5_4_15_4_1").click(function () {
        $("#part5_4_15_4_1").val("");
        $("#submit5_4_15_4_1").val("获取中...");
        setTimeout(caiyangbzz54, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 4_2
    function caiyangbzz54() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_4_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_4_2").val(readValue($("#part5_4_15_4_1").val()));
                $("#submit5_4_15_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-5
    $("#submit5_4_15_5_1").click(function () {
        $("#part5_4_15_5_1").val("");
        $("#submit5_4_15_5_1").val("获取中...");
        setTimeout(caiyangbzz55, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 5_2
    function caiyangbzz55() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_5_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_5_2").val(readValue($("#part5_4_15_5_1").val()));
                $("#submit5_4_15_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-6
    $("#submit5_4_15_6_1").click(function () {
        $("#part5_4_15_6_1").val("");
        $("#submit5_4_15_6_1").val("获取中...");
        setTimeout(caiyangbzz56, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 6_2
    function caiyangbzz56() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_6_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_6_2").val(readValue($("#part5_4_15_6_1").val()));
                $("#submit5_4_15_6_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-7
    $("#submit5_4_15_7_1").click(function () {
        $("#part5_4_15_7_1").val("");
        $("#submit5_4_15_7_1").val("获取中...");
        setTimeout(caiyangbzz57, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 7_2
    function caiyangbzz57() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_7_1").val((parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_7_2").val(readValue($("#part5_4_15_7_1").val()));
                $("#submit5_4_15_7_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-8
    $("#submit5_4_15_8_1").click(function () {
        $("#part5_4_15_8_1").val("");
        $("#submit5_4_15_8_1").val("获取中...");
        setTimeout(caiyangbzz58, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 8_2
    function caiyangbzz58() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_8_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_8_2").val(readValue($("#part5_4_15_8_1").val()));
                $("#submit5_4_15_8_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-9
    $("#submit5_4_15_9_1").click(function () {
        $("#part5_4_15_9_1").val("");
        $("#submit5_4_15_9_1").val("获取中...");
        setTimeout(caiyangbzz59, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 9_2
    function caiyangbzz59() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_9_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_9_2").val(readValue($("#part5_4_15_9_1").val()));
                $("#submit5_4_15_9_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part5 标准值 5-10
    $("#submit5_4_15_10_1").click(function () {
        $("#part5_4_15_10_1").val("");
        $("#submit5_4_15_10_1").val("获取中...");
        setTimeout(caiyangbzz510, time);//延迟500ms执行
    });
    //采样 全检 part5 显示值 10_2
    function caiyangbzz510() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_15_10_1").val(( parseFloat(data.average2) * danweijinzhi).toString());
                $("#part5_4_15_10_2").val(readValue($("#part5_4_15_10_1").val()));
                $("#submit5_4_15_10_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_8 = 1;//默认为1，μΩ
    var danweijinzhi6_8 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_31").click(function () {
        if (danwei6_8 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_8(jinzhi)
        } else if (danwei6_8== 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_8(jinzhi)
        }
        danwei6_8 = 1;
        danweijinzhi6_8 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_32").click(function () {
        if (danwei6_8 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_8(jinzhi)
        } else if (danwei6_8 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_8(jinzhi)
        }
        danwei6_8 = 2;
        danweijinzhi6_8 = 1000;
    });

    //单位为KΩ时,3
    $("#radio5_33").click(function () {
        if (danwei6_8 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_8(jinzhi)
        } else if (danwei6_8 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_8(jinzhi)
        }
        danwei6_8 = 3;
        danweijinzhi6_8 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_8(jinzhi) {
        if ($("#part5_4_15_1_1").val() != "") {
            $("#part5_4_15_1_1").val((parseFloat($("#part5_4_15_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_1_2").val() != "") {
            $("#part5_4_15_1_2").val((parseFloat($("#part5_4_15_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_2_1").val() != "") {
            $("#part5_4_15_2_1").val((parseFloat($("#part5_4_15_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_2_2").val() != "") {
            $("#part5_4_15_2_2").val((parseFloat($("#part5_4_15_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_3_1").val() != "") {
            $("#part5_4_15_3_1").val((parseFloat($("#part5_4_15_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_3_2").val() != "") {
            $("#part5_4_15_3_2").val((parseFloat($("#part5_4_15_3_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_4_1").val() != "") {
            $("#part5_4_15_4_1").val((parseFloat($("#part5_4_15_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_4_2").val() != "") {
            $("#part5_4_15_4_2").val((parseFloat($("#part5_4_15_4_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_5_1").val() != "") {
            $("#part5_4_15_5_1").val((parseFloat($("#part5_4_15_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_5_2").val() != "") {
            $("#part5_4_15_5_2").val((parseFloat($("#part5_4_15_5_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_6_1").val() != "") {
            $("#part5_4_15_6_1").val((parseFloat($("#part5_4_15_6_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_6_2").val() != "") {
            $("#part5_4_15_6_2").val((parseFloat($("#part5_4_15_6_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_7_1").val() != "") {
            $("#part5_4_15_7_1").val((parseFloat($("#part5_4_15_7_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_7_2").val() != "") {
            $("#part5_4_15_7_2").val((parseFloat($("#part5_4_15_7_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_8_1").val() != "") {
            $("#part5_4_15_8_1").val((parseFloat($("#part5_4_15_8_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_8_2").val() != "") {
            $("#part5_4_15_8_2").val((parseFloat($("#part5_4_15_8_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_9_1").val() != "") {
            $("#part5_4_15_9_1").val((parseFloat($("#part5_4_15_9_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_9_2").val() != "") {
            $("#part5_4_15_9_2").val((parseFloat($("#part5_4_15_9_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_10_1").val() != "") {
            $("#part5_4_15_10_1").val((parseFloat($("#part5_4_15_10_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_15_10_2").val() != "") {
            $("#part5_4_15_10_2").val((parseFloat($("#part5_4_15_10_2").val()) * jinzhi).toString());
        }
    }

    var lc5="lc5";
    //提交量程5
    $("#submit5_26").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addLCData.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                    "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                    "dw": $("input[name='check5_11']:checked").val(),//单位1/2/3--->mΩ/Ω/kΩ
                    "bzz1": $("#part5_4_15_1_1").val(),//标准值
                    "dsz1": $("#part5_4_15_1_2").val(),//显示值
                    "bzz2": $("#part5_4_15_2_1").val(),
                    "dsz2": $("#part5_4_15_2_2").val(),
                    "bzz3": $("#part5_4_15_3_1").val(),
                    "dsz3": $("#part5_4_15_3_2").val(),
                    "bzz4": $("#part5_4_15_4_1").val(),
                    "dsz4": $("#part5_4_15_4_2").val(),
                    "bzz5": $("#part5_4_15_5_1").val(),
                    "dsz5": $("#part5_4_15_5_2").val(),
                    "bzz6": $("#part5_4_15_6_1").val(),
                    "dsz6": $("#part5_4_15_6_2").val(),
                    "bzz7": $("#part5_4_15_7_1").val(),
                    "dsz7": $("#part5_4_15_7_2").val(),
                    "bzz8": $("#part5_4_15_8_1").val(),
                    "dsz8": $("#part5_4_15_8_2").val(),
                    "bzz9": $("#part5_4_15_9_1").val(),
                    "dsz9": $("#part5_4_15_9_2").val(),
                    "bzz10": $("#part5_4_15_10_1").val(),
                    "dsz10": $("#part5_4_15_10_2").val(),
                    "lc": lc5
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_5").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=lc1的文本框清空，以便重新下一次填充
    $("#submit5_27").click(function () {
        $("input[name='lc5']").val(""); // 将name=lc5的文本框清空，以便重新下一次修改
        $("input[name='lc5']").removeAttr("title");
        $("input[name='lc5']").css("background", "white"); // 清除红色标记
        $("input[name='lc5_value']").val(""); // 将name=lc5_value的文本框清空，以便重新下一次修改
        $("input[name='lc5_value']").removeAttr("title");
        $("input[name='lc5_value']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_5").html("");

    });
    /**
     * EE回路电阻菜单  Part5 量程5 结束
     */

    /**
     * EE回路电阻菜单  Part6 电阻稳定性误差 开始
     */

    //获取数据 采样 全检 part6 稳定性误差 6-7
    $("#submit5_4_16_7_1").click(function () {
        $("#part5_4_16_7_1").val("");
        $("#submit5_4_16_7_1").val("获取中...");
        setTimeout(caiyangds67, time);//延迟500ms执行
    });
    //采样 全检 part6
    function caiyangds67(){
        var data=new Array(6);
        var maxds=0;
        var minds=0;
        data[0]=$("#part5_4_16_1_1").val();
        data[1]=$("#part5_4_16_2_1").val();
        data[2]=$("#part5_4_16_3_1").val();
        data[3]=$("#part5_4_16_4_1").val();
        data[4]=$("#part5_4_16_5_1").val();
        data[5]=$("#part5_4_16_6_1").val();
        for(var i=0; i<6; i++){
            if(maxds<data[i]){
                maxds=data[i];
            }
        }
        for(var i=0; i<6; i++){
            if(minds>data[i]){
                minds=data[i];
            }
        }
        $.ajax({
           type: "POST",
           url: "Action_getCaiyangDataPart1.action",
           contentType: "application/x-www-form-urlencoded; charset=utf-8",
           dataType: "json",
           cache: false,
           success: function (data) {
               $("#part5_4_16_7_1").val(((maxds-minds)/parseFloat(data.average2) * 100).toFixed(2).toString());
               $("#submit5_4_16_7_1").val("获取数据");
           },
           error: function (jqXHR) {
               alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
           }
       });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_9 = 1;//默认为1，μΩ
    var danweijinzhi6_9 = 1;//默认为1，μΩ,用于后台传过来的值与之相乘
    // 单位为μΩ时,1
    $("#radio5_34").click(function () {
        if (danwei6_9 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_9(jinzhi)
        } else if (danwei6_9== 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_9(jinzhi)
        }
        danwei6_9 = 1;
        danweijinzhi6_9 = 1;
    });

    //单位为mΩ时,2
    $("#radio5_35").click(function () {
        if (danwei6_9 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_9(jinzhi)
        } else if (danwei6_9 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_9(jinzhi)
        }
        danwei6_9 = 2;
        danweijinzhi6_9 = 1000;
    });

    //单位为Ω时,3
    $("#radio5_36").click(function () {
        if (danwei6_9 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_9(jinzhi)
        } else if (danwei6_9 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_9(jinzhi)
        }
        danwei6_9 = 3;
        danweijinzhi6_9 = 1000000;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_9(jinzhi) {
        if ($("#part5_4_16_1_1").val() != "") {
            $("#part5_4_16_1_1").val((parseFloat($("#part5_4_16_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_16_2_1").val() != "") {
            $("#part5_4_16_2_1").val((parseFloat($("#part5_4_16_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_16_3_1").val() != "") {
            $("#part5_4_16_3_1").val((parseFloat($("#part5_4_16_3_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_16_4_1").val() != "") {
            $("#part5_4_16_4_1").val((parseFloat($("#part5_4_16_4_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_16_5_1").val() != "") {
            $("#part5_4_16_5_1").val((parseFloat($("#part5_4_16_5_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_16_6_1").val() != "") {
            $("#part5_4_16_6_1").val((parseFloat($("#part5_4_16_6_1").val()) * jinzhi).toString());
        }
    }

    //提交量程6
    $("#submit5_28").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addWDXWC.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                     "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                     "dw": $("input[name='check5_12']:checked").val(),//单位1/2/3--->μΩ/mΩ/Ω
                     "readvalue1": $("#part5_4_16_1_1").val(),
                     "readvalue2": $("#part5_4_16_2_1").val(),
                     "readvalue3": $("#part5_4_16_3_1").val(),
                     "readvalue4": $("#part5_4_16_4_1").val(),
                     "readvalue5": $("#part5_4_16_5_1").val(),
                     "readvalue6": $("#part5_4_16_6_1").val(),
                     "wdxwc": $("#part5_4_16_7_1").val(),
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_6").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=ds的文本框清空，以便重新下一次填充
    $("#submit5_29").click(function () {
        $("input[name='ds']").val(""); // 将name=ds的文本框清空，以便重新下一次修改
        $("input[name='ds']").removeAttr("title");
        $("input[name='ds']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_6").html("");
    });
    /**
     * EE回路电阻菜单  Part6 电阻稳定性误差 结束
     */

    /**
     * EE回路电阻菜单  Part7 输出电流基本误差和过冲测量 开始
     */
    //获取数据 采样 全检 part7 示值 7-1
    $("#submit5_4_17_1_1").click(function () {
        $("#part5_4_17_1_1").val("");
        $("#submit5_4_17_1_1").val("获取中...");
        setTimeout(caiyangsz71, time);//延迟500ms执行
    });
    //采样 全检 part7
    function caiyangsz71() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_17_1_1").val(((parseFloat(data.average3)) * danweijinzhi).toString());
                $("#part5_4_17_1_2").val(readValue($("#part5_4_17_1_1").val()));
                $("#submit5_4_17_1_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part7 示值 7-2
    $("#submit5_4_17_2_1").click(function () {
        $("#part5_4_17_2_1").val("");
        $("#submit5_4_17_2_1").val("获取中...");
        setTimeout(caiyangsz72, time);//延迟500ms执行
    });
    //采样 全检 part7
    function caiyangsz72() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_17_2_1").val(((parseFloat(data.average3)) * danweijinzhi).toString());
                $("#part5_4_17_2_2").val(readValue($("#part5_4_17_2_1").val()));
                $("#submit5_4_17_2_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part7 示值 7-3
    $("#submit5_4_17_3_1").click(function () {
        $("#part5_4_17_3_1").val("");
        $("#submit5_4_17_3_1").val("获取中...");
        setTimeout(caiyangsz73, time);//延迟500ms执行
    });
    //采样 全检 part7
    function caiyangsz73() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_17_3_1").val(((parseFloat(data.average3)) * danweijinzhi).toString());
                $("#part5_4_17_3_2").val(readValue($("#part5_4_17_3_1").val()));
                $("#submit5_4_17_3_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part7 示值 7-4
    $("#submit5_4_17_4_1").click(function () {
        $("#part5_4_17_4_1").val("");
        $("#submit5_4_17_4_1").val("获取中...");
        setTimeout(caiyangsz74, time);//延迟500ms执行
    });
    //采样 全检 part7
    function caiyangsz74() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_17_4_1").val(((parseFloat(data.average3)) * danweijinzhi).toString());
                $("#part5_4_17_4_2").val(readValue($("#part5_4_17_4_1").val()));
                $("#submit5_4_17_4_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }
    //获取数据 采样 全检 part7 示值 7-5
    $("#submit5_4_17_5_1").click(function () {
        $("#part5_4_17_5_1").val("");
        $("#submit5_4_17_5_1").val("获取中...");
        setTimeout(caiyangsz75, time);//延迟500ms执行
    });
    //采样 全检 part7
    function caiyangsz75() {
        $.ajax({
            type: "POST",
            url: "Action_getCaiyangDataPart1.action",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#part5_4_17_5_1").val(((parseFloat(data.average3)) * danweijinzhi).toString());
                $("#part5_4_17_5_2").val(readValue($("#part5_4_17_5_1").val()));
                $("#submit5_4_17_5_1").val("获取数据");
            },
            error: function (jqXHR) {
                alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
            }
        });
    }

    //处理单位之间的转换问题 第二行数据
    var danwei6_10 = 2;//默认为2，A
    var danweijinzhi6_10 = 1;//默认为2，A,用于后台传过来的值与之相乘
    // 单位为mA时,1
    $("#radio5_37").click(function () {
        if (danwei6_10 == 2) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_10(jinzhi)
        } else if (danwei6_10 == 3) {
            var jinzhi = 1000000;
            jinzhizhuanhuan6_10(jinzhi)
        }
        danwei6_10 = 1;
        danweijinzhi6_10 = 1000;
    });

    //单位为A时,2
    $("#radio5_38").click(function () {
        if (danwei6_10 == 1) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_10(jinzhi)
        } else if (danwei6_10 == 3) {
            var jinzhi = 1000;
            jinzhizhuanhuan6_10(jinzhi)
        }
        danwei6_10 = 2;
        danweijinzhi6_10 = 1;
    });

    //单位为KA时,3
    $("#radio5_39").click(function () {
        if (danwei6_10 == 1) {
            var jinzhi = 0.000001;
            jinzhizhuanhuan6_10(jinzhi)
        } else if (danwei6_10 == 2) {
            var jinzhi = 0.001;
            jinzhizhuanhuan6_10(jinzhi)
        }
        danwei6_10 = 3;
        danweijinzhi6_10 = 0.001;
    });
    //进制转换公共程序
    function jinzhizhuanhuan6_10(jinzhi) {
        if ($("#part5_4_17_1_1").val() != "") {
            $("#part5_4_17_1_1").val((parseFloat($("#part5_4_17_1_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_1_2").val() != "") {
            $("#part5_4_17_1_2").val((parseFloat($("#part5_4_17_1_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_1_3").val() != "") {
            $("#part5_4_17_1_3").val((parseFloat($("#part5_4_17_1_3").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_1_4").val() != "") {
            $("#part5_4_17_1_4").val((parseFloat($("#part5_4_17_1_4").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_1_5").val() != "") {
            $("#part5_4_17_1_5").val((parseFloat($("#part5_4_17_1_5").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_2_1").val() != "") {
            $("#part5_4_17_2_1").val((parseFloat($("#part5_4_17_2_1").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_2_2").val() != "") {
            $("#part5_4_17_2_2").val((parseFloat($("#part5_4_17_2_2").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_2_3").val() != "") {
            $("#part5_4_17_2_3").val((parseFloat($("#part5_4_17_2_3").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_2_4").val() != "") {
            $("#part5_4_17_2_4").val((parseFloat($("#part5_4_17_2_4").val()) * jinzhi).toString());
        }
        if ($("#part5_4_17_2_5").val() != "") {
            $("#part5_4_17_2_5").val((parseFloat($("#part5_4_17_2_5").val()) * jinzhi).toString());
        }
    }

    //提交量程7
    $("#submit5_30").click(function () {
        if ($("#leixing5_1").text() == "" || $("#zsbh5_1").text() == "") {
            alert("请先选择一条待检测的送检仪器！")
        } else {
            $.ajax({
                type: "POST",
                url: "Action_addDLGC.action",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data: {
                     "zsbh": $("#zsbh5_1").text(),//送检仪器证书编号
                     "dw": $("input[name='check5_13']:checked").val(),//单位1/2/3--->mA/A/kA
                     "shizhi1": $("#part5_4_17_1_1").val(),//标准值
                     "shizhi2": $("#part5_4_17_2_1").val(),//显示值
                     "shizhi3": $("#part5_4_17_3_1").val(),
                     "shizhi4": $("#part5_4_17_4_1").val(),
                     "shizhi5": $("#part5_4_17_5_1").val(),
                     "shijizhi1": $("#part5_4_17_1_2").val(),
                     "shijizhi2": $("#part5_4_17_2_2").val(),
                     "shijizhi3": $("#part5_4_17_3_2").val(),
                     "shijizhi4": $("#part5_4_17_4_2").val(),
                     "shijizhi5": $("#part5_4_17_5_2").val(),
                     "dlgc": $("#part5_4_17_6_1").val(),
                     "gcmk": $("#part5_4_17_6_2").val(),
                },
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.jsonObject == "1") {
                        $("#part5_4_12_7").html("数据提交成功！")
                    }
                    else {
                        alert("提交失败！")
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误代码：" + jqXHR.status + "，数据未加载成功！");
                }
            });
        }
    });
    // 将name=sz的文本框清空，以便重新下一次填充
    $("#submit5_31").click(function () {
        $("input[name='sz']").val(""); // 将name=sz的文本框清空，以便重新下一次修改
        $("input[name='sz']").removeAttr("title");
        $("input[name='sz']").css("background", "white"); // 清除红色标记
        $("#part5_4_12_7").html("");
    });
    /**
     * EE回路电阻菜单  Part7 输出电流基本误差和过冲测量 结束
     */

});