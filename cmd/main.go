package main

import (
	"fmt"
	"html/template"
	"net/http"
	"orcestrator-kamin/internal/config"
)

func home_page(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/main/index.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func queue_page(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/robot/queue_robots.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func work_robots_page(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/robot/work_robots.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func credentials(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/settings/credentials.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func assets(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/settings/assets.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func add_robot(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("views/robot/add_robot.html", "views/main/header.html")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	cfg := config.LoadConfig()
	fmt.Println(cfg)

	http.HandleFunc("/", home_page)
	http.HandleFunc("/queue/", queue_page)
	http.HandleFunc("/work_robots/", work_robots_page)
	http.HandleFunc("/add_robot/", add_robot)
	http.HandleFunc("/asset/", assets)
	http.HandleFunc("/credentials/", credentials)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Server started on :8080")
	http.ListenAndServe(cfg.Server.Port, nil)
}
