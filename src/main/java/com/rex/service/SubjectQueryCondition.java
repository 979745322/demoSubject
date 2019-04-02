package com.rex.service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubjectQueryCondition {
    /**
     * 页数
     */
    Integer pageNum;

    /**
     * 查询条件
     */
    String title;
}
