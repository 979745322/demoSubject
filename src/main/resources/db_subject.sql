/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : db_subject

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-03-29 15:43:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_answer
-- ----------------------------
DROP TABLE IF EXISTS `tb_answer`;
CREATE TABLE `tb_answer` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `SUBJECT_ID` bigint(20) NOT NULL COMMENT '题目ID',
  `ANSWER` varchar(255) DEFAULT NULL COMMENT '答案',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='答案表';

-- ----------------------------
-- Table structure for tb_subject
-- ----------------------------
DROP TABLE IF EXISTS `tb_subject`;
CREATE TABLE `tb_subject` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `TITLE` varchar(255) DEFAULT NULL COMMENT '题目',
  `DELETE_FLAG` varchar(4) NOT NULL DEFAULT '1' COMMENT '删除状态，‘0’删除，‘1’未删除',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='题目表';

-- ----------------------------
-- Table structure for tb_subject_items
-- ----------------------------
DROP TABLE IF EXISTS `tb_subject_items`;
CREATE TABLE `tb_subject_items` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `SUBJECT_ID` bigint(20) NOT NULL COMMENT '题目ID',
  `OPTIONS` varchar(10) DEFAULT NULL COMMENT '选项',
  `CONTENT` varchar(255) DEFAULT NULL COMMENT '选项内容',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='题目选项表';
