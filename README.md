
# NewsMonkey

Simple React JS app using functional components.

## Acknowledgements

 - [React Top Loaing Bar](https://www.npmjs.com/package/react-top-loading-bar)
 - [React-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
 - [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
 - [News API](https://newsapi.org/)


## API Reference

#### Get all news

```http
  https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


## Authors

- [@Gaurang Patel](https://github.com/gmp419?tab=repositories)


## Deployment

To start this project under development server

```bash
  npm run start
```


## Screenshots

<img width="1440" alt="Screen Shot 2022-02-03 at 7 06 29 PM" src="https://user-images.githubusercontent.com/60801629/152447430-77052aeb-db10-43d7-8804-efa8c87d3fb8.png">


