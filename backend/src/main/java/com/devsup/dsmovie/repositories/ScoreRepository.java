package com.devsup.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.dsmovie.entities.Score;
import com.devsup.dsmovie.entities.ScorePrimaryKey;

public interface ScoreRepository extends JpaRepository<Score, ScorePrimaryKey> {

}
