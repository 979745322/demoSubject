package com.rex.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 题目实体
 */
@Getter
@Setter
public class Subject {

    private Long id;

    // 题目
    private String title;

    // 选项
    private List<SubjectItems> subjectItems;

    // 答案
    private String answer;

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", subjectItems=" + subjectItems +
                ", answer='" + answer + '\'' +
                '}';
    }
}
