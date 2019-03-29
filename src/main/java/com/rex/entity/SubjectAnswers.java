package com.rex.entity;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class SubjectAnswers {
    private Long id;

    // 题目ID
    private Long subjectId;

    // 题目答案
    @NotBlank(message = "题目答案不能为空！")
    private String answer;

    @Override
    public String toString() {
        return "SubjectAnswers{" +
                "id=" + id +
                ", subjectId=" + subjectId +
                ", answer='" + answer + '\'' +
                '}';
    }
}
