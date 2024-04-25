## mac 添加定时任务



com.example.autorun.plist

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.example.autorun</string>
        <key>ProgramArguments</key>
        <array>
            <string>/bin/sh</string>
            <string>/path/to/your/script.sh</string>
        </array>
        <key>StartCalendarInterval</key>
        <dict>
            <key>Hour</key>
            <integer>17</integer>
            <key>Minute</key>
            <integer>0</integer>
        </dict>
    </dict>
</plist>

```

```

mv com.example.autorun.plist /Library/LaunchDaemons/

launchctl load /Library/LaunchDaemons/com.example.autorun.plist

launchctl unload /Library/LaunchDaemons/com.example.autorun.plist

```




[macOS下使用crontab定时任务](https://blog.csdn.net/seanxwq/article/details/125484860)
