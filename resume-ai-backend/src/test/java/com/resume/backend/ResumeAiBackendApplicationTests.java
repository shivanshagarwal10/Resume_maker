package com.resume.backend;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.resume.backend.service.ResumeService;

@SpringBootTest
class ResumeAiBackendApplicationTests {

	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException{
		resumeService.generateResumeResponse("I am Shivansh Agarwal proficient in backend");
	}
}
