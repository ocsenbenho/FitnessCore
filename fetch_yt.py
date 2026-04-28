import urllib.request
import re
import sys

queries = [
    "bulgarian split squat tutorial form short",
    "kettlebell swing form tutorial short",
    "single leg glute bridge tutorial form short",
    "hollow body hold tutorial form short",
    "russian twist tutorial form short",
    "bear crawl tutorial form short",
    "burpee form tutorial short",
    "high knees exercise form short",
    "jump squat exercise form short"
]

results = []
for q in queries:
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(q)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'watch\?v=([a-zA-Z0-9_-]{11})', html)
        if match:
            results.append((q, match.group(1)))
        else:
            results.append((q, "FOUND_NONE"))
    except Exception as e:
        results.append((q, str(e)))

for r in results:
    print(r[0] + " -> " + r[1])
