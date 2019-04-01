package com.rex.service.impl;

import com.rex.entity.Subject;
import com.rex.mapper.SubjectMapper;
import com.rex.service.SubjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;


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
            addSubjectItems(subject);
            // 添加题目答案
            addSubjectAnswer(subject);

        }catch(Exception e){
            log.info("e:{}",e);
            return "添加题目失败，请正确填写题目！";
        }

        return "添加成功";
    }

    @Override
    public Integer addSubjectItems(Subject subject) {
        return subjectMapper.addSubjectItems(subject);
    }

    @Override
    public Integer addSubjectAnswer(Subject subject) {
        return subjectMapper.addSubjectAnswer(subject);
    }

    @Override
    public Subject selectSubject(Long id) {
        try {
            final Subject subject = subjectMapper.selectSubjectById(id);
            if(subject!=null){
                subject.setSubjectItems(subjectMapper.selectSubjectItemsById(id));
                subject.setSubjectAnswers(subjectMapper.selectSubjectAnswersById(id));
            }
            return subject;
        }catch(Exception e){
            log.info("e:{}",e);
            return null;
        }

    }

    @Override
    public Long selectSubjectCount() {
        return subjectMapper.selectSubjectCount();
    }

    private Long LongRandom(){
        Long subId = 1L;
        Long n = subjectMapper.selectSubjectCount();
        Long x[] = new Long[Integer.valueOf(String.valueOf(n))];
        for(Long i = 0L; i < n; i++)
        {
            x[Integer.valueOf(String.valueOf(i))] = i+1;
        }
        for(int i = 0; i < 1; i++)
        {
            int t = (int)(Math.random()*n)+1;
            Long temp = x[i];
            x[i] = x[t];
            x[t] = temp;
            System.out.println(x[i]);
        }
        return null;
    }
}
