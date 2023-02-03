package com.example.stock.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {
    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService userService) {
        this.usersService = userService;
    }

    @GetMapping(path = "/get")
    public List<Users> getStudents(){
        return usersService.getUsers();
    }

    @PostMapping(path = "/post")
    public void addUser(@RequestBody Users newUser){
        usersService.addNewUser(newUser);
    }

    @PostMapping(path = "/{userId}/insert")
    public void insertTicker(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String ticker){
        usersService.updateTicker(userId, ticker, "add");
    }

    @PostMapping(path = "/{userId}/delete")
    public void deleteTicker(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String ticker){
        usersService.updateTicker(userId, ticker, "delete");
    }
}
