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
        subjectMapper.addSubject(subject);
        log.info("list========{}",subject.getSubjectItems()
                .stream()
                .filter(subItem -> {
                    subItem.setSubjectId(subject.getId());
                    return true;
                })
                .collect(Collectors.toList()));
        addSubjectItems(subject);
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
