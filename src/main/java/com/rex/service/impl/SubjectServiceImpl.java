package com.rex.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rex.entity.Subject;
import com.rex.mapper.SubjectMapper;
import com.rex.service.SubjectQueryCondition;
import com.rex.service.SubjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


/**
 * 题目接口实现类
 */
@Service
@Slf4j
public class SubjectServiceImpl implements SubjectService {
    private final SubjectMapper subjectMapper;

    @Autowired
    public SubjectServiceImpl(SubjectMapper subjectMapper) {
        this.subjectMapper = subjectMapper;
    }

    @Override
    public String addSubject(Subject subject) {
        try {
            // 添加题目实体
            subjectMapper.addSubject(subject);
            // 添加题目选项
            subjectMapper.addSubjectItems(subject);
            // 添加题目答案
            subjectMapper.addSubjectAnswer(subject);

        } catch (Exception e) {
            log.info("e:{}", e);
            return "添加题目失败，请正确填写题目！";
        }

        return "添加成功";
    }

    @Override
    public String updateSubject(Subject subject) {
        try {
            /*// 修改题目实体
            subjectMapper.updateSubject(subject);
            // 删除题目选项
            subjectMapper.deleteSubjectItems(subject);
            // 删除题目答案
            subjectMapper.deleteSubjectAnswers(subject);*/
            // 添加题目选项
            subjectMapper.addSubjectItems(subject);
            // 添加题目答案
            subjectMapper.addSubjectAnswer(subject);

        } catch (Exception e) {
            log.info("e:{}", e);
            return "修改题目失败，请正确填写题目！";
        }
        return "修改成功";
    }

    @Override
    public Subject selectSubject(Long id) {
        try {
            final Subject subject = subjectMapper.selectSubjectById(id);
            if (subject != null) {
                subject.setSubjectItems(subjectMapper.selectSubjectItemsById(id));
                subject.setSubjectAnswers(subjectMapper.selectSubjectAnswersById(id));
            }
            return subject;
        } catch (Exception e) {
            log.info("e:{}", e);
            return null;
        }

    }

    @Override
    public String deleteSubject(Long id) {
        try {
            subjectMapper.deleteSubject(id);
        } catch (Exception e) {
            log.info("e:{}", e);
            return "删除失败!";
        }
        return "删除成功!";
    }

    @Override
    public Long selectSubjectCount() {
        return subjectMapper.selectSubjectCount();
    }

    @Override
    public PageInfo findSubject(SubjectQueryCondition condition) {
        PageHelper.startPage(condition.getPageNum(), 5);
        final List<Subject> list = subjectMapper.findSubject(condition);
        list.forEach(sub -> {
            sub.setSubjectItems(subjectMapper.selectSubjectItemsById(sub.getId()));
            sub.setSubjectAnswers(subjectMapper.selectSubjectAnswersById(sub.getId()));
        });
        return new PageInfo(list, 6);
    }

}
