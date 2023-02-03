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
    public void updateTickers(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String newTicker){
        usersService.addTicker(userId, newTicker);
    }
}
