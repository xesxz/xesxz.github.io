ffmpeg



```bash
ffmpeg -i input_video.mp4 \
-c:v libx264 \
-c:a aac \
-hls_time 10 \
-hls_segment_type mpegts \
-hls_list_size 0 \
-f hls \
-max_muxing_queue_size 1024 \
output.m3u8
```
