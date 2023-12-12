package howlingabysstool.howlingabysstoolapi.controller;


import howlingabysstool.howlingabysstoolapi.domain.Match.Match;
import howlingabysstool.howlingabysstoolapi.service.MatchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/match")
public class MatchController {
    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping("/{matchId}")
    public Match getData(@PathVariable String matchId) {
        return matchService.getMatchByMatchId(matchId);
    }

    @GetMapping("/request/{amount}/{puuid}")
    public ResponseEntity<List<String>> getMatchIds(@PathVariable int amount, @PathVariable String puuid) {
        List<String> matches = matchService.getAramMatchIdsByPuuid(puuid, amount);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }
}
