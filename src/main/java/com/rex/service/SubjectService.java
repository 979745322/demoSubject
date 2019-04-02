package com.rex.service;

import com.github.pagehelper.PageInfo;
import com.rex.entity.Subject;
import com.rex.entity.SubjectItems;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 题目接口
 */
public interface SubjectService {
    /**
     * 新增题目
     * @param subject 题目实体
     * @return 返回新增题目结果
     */
    String addSubject(Subject subject);

    /**
     * 新增题目
     * @param subject 题目选项
     * @return 返回新增题目选项结果
     */
    Integer addSubjectItems(Subject subject);

    /**
     *
     * 新增题目
     * @param subject 题目答案
     * @return 返回新增题目选项结果
     */
    Integer addSubjectAnswer(Subject subject);

    /**
     *
     * 查找题目
     * @return 返回查找的题目
     */
    Subject selectSubject(Long id);

    /**
     *
     * 查找题目数量
     * @return 返回查找的题目数量
     */
    Long selectSubjectCount();

    /**
     * 分页查找题目
     * @param condition 查询条件
     * @return 分页查询结果
     */
    PageInfo findSubject(SubjectQueryCondition condition);
}
