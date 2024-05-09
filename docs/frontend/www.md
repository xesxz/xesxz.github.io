


./main -f samples/outpu2t.wav -m models/Memo-large.zh.bin --language Chinese



https://github.com/flameddd/blog/blob/master/2023-03-01%EF%BC%9Awhisper.cpp%20%E8%AA%9E%E9%9F%B3%E8%BD%89%E6%96%87%E5%AD%97%E6%95%99%E5%AD%B8.md



./main -f samples/outpu2t.wav -m models/Memo-large.zh.bin --language Chinese -otxt



./main -m models/ggml-large.bin -l zh -f ~/Downloads/white.wav  -osrt -otxt -ovtt



./main -f samples/outpu2t.wav -m models/Memo-large.zh.bin  -l zh




./main -f samples/outpu2t.wav -m models-memo/ggml-large-v1.bin  -l zh




main.exe -m C:\Users\hi\Desktop\whisper.cpp\models\ggml-large-v2.bin -f C:\Users\hi\Desktop\whisper.cpp\samples\jfk.wav  


./main.exe -m C:\Users\hi\Desktop\whisper.cpp\models\ggml-large-v2.bin -f C:\Users\hi\Desktop\whisper.cpp\samples\outpu2t.wav  -l zh  -otxt 


95854.00 ms
108211.27 ms


./main.exe -m C:/Users/hi/Desktop/whisper.cpp/models/ggml-large-v2.bin -f C:/Users/hi/Desktop/whisper.cpp/samples/outpu2t.wav  -l zh


https://github.com/flameddd/blog/blob/master/2023-03-01%EF%BC%9Awhisper.cpp%20%E8%AA%9E%E9%9F%B3%E8%BD%89%E6%96%87%E5%AD%97%E6%95%99%E5%AD%B8.md
ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav
