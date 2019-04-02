package com.rex.web.subject;

import com.google.common.collect.Maps;
import com.rex.entity.Subject;
import com.rex.service.SubjectQueryCondition;
import com.rex.service.SubjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

import static com.rex.web.WebURIMappingConstant.URI_SUBJECT;

/**
 * 题目控制层
 */
@Slf4j
@RestController
@RequestMapping(URI_SUBJECT)
public class SubjectController {

    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @RequestMapping("/")
    public String index() {
        return "subject";
    }

    @RequestMapping("/addSubject")
    public Map<String, Object> addSubject(@Valid @RequestBody Subject subject, BindingResult bindingResult) {
        log.info("addSubject入参:subject{}", subject);
        final Map<String, Object> map = Maps.newHashMap();
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(error -> log.info("errors:{}",error.getDefaultMessage()));
            // 错误处理 （抛出异常交给全局处理或者在这里返回自定义的 JSON）
            map.put("state", bindingResult.getAllErrors().get(0).getDefaultMessage());
        } else {
            map.put("state", subjectService.addSubject(subject));
        }

        return map;
    }

    @RequestMapping("/selectSubject")
    public Map<String, Object> selectSubject(@RequestBody String id) {
        final Map<String, Object> map = Maps.newHashMap();
        map.put("state", "success");
        map.put("subject", subjectService.selectSubject(Long.valueOf(id)));

        return map;
    }

    @RequestMapping("/selectSubjectCount")
    public Map<String, Object> selectSubjectCount() {
        final Map<String, Object> map = Maps.newHashMap();
        map.put("state", "success");
        map.put("count", subjectService.selectSubjectCount());

        return map;
    }

    @RequestMapping("/findSubject")
    public Map<String, Object> findSubject(@RequestBody SubjectQueryCondition condition) {
        log.info("condition:{}",condition);
        final Map<String, Object> map = Maps.newHashMap();
        map.put("state", "success");
        map.put("pageInfo", subjectService.findSubject(condition));

        return map;
    }


}
