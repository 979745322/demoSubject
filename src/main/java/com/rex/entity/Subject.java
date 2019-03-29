package com.rex.entity;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.List;

/**
 * 题目实体
 */
@Getter
@Setter
public class Subject {

    private Long id;

    // 题目
    @NotBlank(message = "题目不能为空！")
    private String title;

    // 选项
    @Valid
    private List<SubjectItems> subjectItems;

    // 答案
    @Valid
    @NotEmpty(message = "题目答案不能为空！")
    private List<SubjectAnswers> subjectAnswers;

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", subjectItems=" + subjectItems +
                ", subjectAnswers=" + subjectAnswers +
                '}';
    }
}
