package com.rex.web.subject;

import com.google.common.collect.Lists;
import com.rex.entity.Subject;
import com.rex.entity.SubjectItems;
import com.rex.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import static com.rex.web.WebURIMappingConstant.URI_SUBJECT;

/**
 * 题目控制层
 */
@Controller
@RequestMapping(URI_SUBJECT)
public class SubjectController {

    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @RequestMapping("/")
    public String index(){
        return "subject";
    }

    @ResponseBody
    @RequestMapping("/add")
    public String addSubject(){
        final Subject subject = new Subject();
        subject.setTitle("a");
        SubjectItems subjectItems1 = new SubjectItems();
        SubjectItems subjectItems2 = new SubjectItems();
        SubjectItems subjectItems3 = new SubjectItems();
        SubjectItems subjectItems4 = new SubjectItems();
        subjectItems1.setOption("A");
        subjectItems1.setContent("a");
        subjectItems2.setOption("B");
        subjectItems2.setContent("b");
        subjectItems3.setOption("C");
        subjectItems3.setContent("c");
        subjectItems4.setOption("D");
        subjectItems4.setContent("d");
        List<SubjectItems> list = Lists.newArrayList();
        list.add(subjectItems1);
        list.add(subjectItems2);
        list.add(subjectItems3);
        list.add(subjectItems4);
        subject.setSubjectItems(list);
        subject.setAnswer("A");
        subjectService.addSubject(subject);
        return "success";
    }
}
