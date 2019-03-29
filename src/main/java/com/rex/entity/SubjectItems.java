package com.rex.entity;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

/**
 * 题目选项实体
 */
@Getter
@Setter
public class SubjectItems {
    private Long id;

    // 题目ID
    private Long subjectId;

    // 选项
    private String option;

    // 选项内容
    @NotBlank(message = "题目选项不能为空！")
    private String content;

    @Override
    public String toString() {
        return "SubjectItems{" +
                "id=" + id +
                ", subjectId=" + subjectId +
                ", option='" + option + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
