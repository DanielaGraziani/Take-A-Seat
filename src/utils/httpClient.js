const API="https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODUzMjA1NTQ0OTU2ZjkwMmZjODc5YTUwYThlNTc1YyIsInN1YiI6IjYyMTJlMjAwNDE0NjVjMDA0NGJkMWNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xhz69Ycfxduu8a9rN9Wxx5TDzHZDj2qqkeAbXYkgahw",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
}