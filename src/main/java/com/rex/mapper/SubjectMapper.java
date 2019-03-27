package com.rex.mapper;

import com.rex.entity.Subject;
import com.rex.entity.SubjectItems;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 题目dao层接口
 */
@Mapper
@Repository
public interface SubjectMapper {
    /**
     * 新增题目
     * @param subject 题目实体
     */
    void addSubject(Subject subject);

    /**
     * 新增题目
     * @param subject 题目选项
     * @return 返回新增题目选项结果
     */
    Long addSubjectItems(@Param("subject") Subject subject);

    /**
     * 新增题目答案
     * @param subject 题目答案
     * @return 返回新增题目答案ID
     */
    Long addSubjectAnswer(Subject subject);
}
