package com.rex.service;

import lombok.Getter;
import lombok.Setter;

/**
 * 查询条件实体
 */
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
