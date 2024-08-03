import client from "prom-client";

const requestCounter = new client.Gauge({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});
