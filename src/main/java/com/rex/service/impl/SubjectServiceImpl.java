package com.rex.service.impl;

import com.rex.entity.Subject;
import com.rex.entity.SubjectItems;
import com.rex.mapper.SubjectMapper;
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
    public Boolean addSubject(Subject subject) {
        // 添加题目实体
        subjectMapper.addSubject(subject);

        //添加题目选项
        addSubjectItems(subject);

        //添加题目答案
        addSubjectAnswer(subject);

        return Boolean.TRUE;
    }

    @Override
    public Boolean addSubjectItems(Subject subject) {
        return subjectMapper.addSubjectItems(subject)>0;
    }

    @Override
    public Boolean addSubjectAnswer(Subject subject) {
        return subjectMapper.addSubjectAnswer(subject)>0;
    }
}
