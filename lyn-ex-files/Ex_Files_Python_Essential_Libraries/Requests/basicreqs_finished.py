# Python Essential Libraries by Joe Marini course example
# Example file for using Requests library
import requests
import json

# create a basic request for data
# resp = requests.get("http://httpbin.org/xml")
# print(resp.status_code)
# print(resp.text)

# create a request using parameters
args = {"key1": 1, "key2": "two", "key3": False}
resp = requests.get("http://httpbin.org/get", params=args)
print(resp.text)
# print(resp.url)
jd = json.loads(resp.text)
print(type(jd))
jds = json.dumps(jd)
print(jds)
print(type(jds))

# create a request using POST
resp = requests.post("http://httpbin.org/post", data={"key": "value"})
print(resp.text)

# create a request using custom headers
heads = {"my-custom-header": "This is a custom header"}
resp = requests.get("http://httpbin.org/get", headers=heads)
print(resp.text)
