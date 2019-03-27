package com.rex.service;

import com.rex.entity.Subject;
import com.rex.entity.SubjectItems;

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
    Boolean addSubject(Subject subject);

    /**
     * 新增题目
     * @param subject 题目选项
     * @return 返回新增题目选项结果
     */
    Boolean addSubjectItems(Subject subject);

    /**
     *
     * 新增题目
     * @param subject 题目答案
     * @return 返回新增题目选项结果
     */
    Boolean addSubjectAnswer(Subject subject);
}
