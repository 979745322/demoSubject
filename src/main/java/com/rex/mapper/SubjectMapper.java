package com.rex.mapper;

import com.rex.entity.Subject;
import com.rex.entity.SubjectAnswers;
import com.rex.entity.SubjectItems;
import com.rex.service.SubjectQueryCondition;
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
     *
     * @param subject 题目实体
     */
    Integer addSubject(Subject subject);

    /**
     * 新增题目
     *
     * @param subject 题目选项
     * @return 返回新增题目选项结果
     */
    Integer addSubjectItems(@Param("subject") Subject subject);

    /**
     * 新增题目答案
     *
     * @param subject 题目答案
     * @return 返回新增题目答案ID
     */
    Integer addSubjectAnswer(@Param("subject") Subject subject);

    /**
     * 根据ID查找题目
     *
     * @param id 题目ID
     * @return 返回查找的题目
     */
    Subject selectSubjectById(@Param("id") Long id);

    /**
     * 根据ID查找题目选项
     *
     * @param id 题目ID
     * @return 返回查找的题目选项
     */
    List<SubjectItems> selectSubjectItemsById(@Param("id") Long id);

    /**
     * 根据ID查找题目答案
     *
     * @param id 题目ID
     * @return 返回查找的题目答案
     */
    List<SubjectAnswers> selectSubjectAnswersById(@Param("id") Long id);

    /**
     * 查找题目数量
     *
     * @return 返回查找的题目数量
     */
    Long selectSubjectCount();

    /**
     * 根据条件查找题目
     *
     * @param condition 查询条件
     * @return 返回查找的题目
     */
    List<Subject> findSubject(SubjectQueryCondition condition);

    /**
     * 删除题目
     */
    Integer deleteSubject(@Param("id") Long id);
}
