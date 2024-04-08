# View public IP
- curl -s checkip.dyndns.org | sed 's#.*Address: \(.*\)</b.*#\1#'
- wget -qO - icanhazip.com
- curl ifconfig.me
- curl ident.me
- dig +short myip.opendns.com @resolver1.opendns.com
- lynx -dump ifconfig.me | grep 'IP Address'
- curl ipecho.net/plain
- curl bot.whatismyipaddress.com
- curl ipinfo.io
- curl ipogre.com

# Benchmarking
- wget dl.getipaddr.net/speedtest.sh -q -O- | bash 
- curl -s dl.getipaddr.net/speedtest.sh -o- | bash
- wget https://raw.github.com/blackdotsh/curl-speedtest/master/speedtest.sh && chmod u+x speedtest.sh && bash speedtest.sh
- wget -O speedtest-cli https://raw.github.com/sivel/speedtest-cli/master/speedtest_cli.py && chmod +x speedtest-cli && ./speedtest-cli

# Download
## CacheFly (Canada):
- wget -O /dev/null http://cachecefly.cachefly.net/100mb.test
## SoftLayer (EE.UU. y Holanda):
- wget -O /dev/null http://speedtest.dal01.softlayer.com/downloads/test100.zip
- wget -O /dev/null http://speedtest.sea01.softlayer.com/downloads/test100.zip
- wget -O /dev/null http://speedtest.ams01.softlayer.com/downloads/test500.zip
- wget -O /dev/null http://50.23.64.58/downloads/test100.zip
- curl -o /dev/null http://speedtest.wdc01.softlayer.com/downloads/test500.zip    
- curl -O http://speedtest.wdc01.softlayer.com/downloads/test10.zip > /dev/null
- wget --output-document=/dev/null http://speedtest.wdc01.softlayer.com/downloads/test500.zip
- echo "scale=2; 'curl  --progress-bar -w "%{speed_download}" http://speedtest.wdc01.softlayer.com/downloads/test10.zip -o test.zip' / 131072" | bc | xargs -I {} echo {}Mb\/s
## Linode (EE.UU., Reino Unido y Japón):
- wget -O /dev/null http://speedtest.tokyo.linode.com/100MB-tokyo.bin
- wget -O /dev/null http://speedtest.london.linode.com/100MB-london.bin
- wget -O /dev/null http://speedtest.newark.linode.com/100MB-newark.bin
- wget -O /dev/null http://speedtest.atlanta.linode.com/100MB-atlanta.bin
- wget -O /dev/null http://speedtest.dallas.linode.com/100MB-dallas.bin
- wget -O /dev/null http://speedtest.fremont.linode.com/100MB-fremont.bin
## Leaseweb (EE.UU. y Holanda):
- wget -O /dev/null http://mirror.nl.leaseweb.net/speedtest/1000mb.bin
- wget -O /dev/null http://mirror.us.leaseweb.net/speedtest/1000mb.bin
## FDCServer (EE.UU.):
- wget -O /dev/null http://lg.denver.fdcservers.net/100MBtest.zip
## OVH (Francia):
- wget -O /dev/null http://proof.ovh.net/files/100Mb.dat

# Upload
- iperf3 -c iperf.scottlinux.com -u
- iperf3 -c iperf.volia.net -R -P 4
- iperf -c iperf.volia.net -r -P 4
- iperf -c s-network1.amcs.tld -P 1 -i 5 -p 5999 -f B -t 60 -T 1
- iperf -c iperf.acd.net -P 10 -t 240
- iperf -c ping.online.net -i 2 -t 20 -r
- bwctl -T iperf3 -f m -t 10 -i 1 -c ps.ncar.xsede.org
- iperf -c ping.online.net -i 5 -u -r
- iperf -c ping-90ms.online.net -i 5 -u -r
- iperf -c debit.k-net.fr -i 10 -T 100
- iperf -c speedtest.serverius.net
- iperf -c iperf.he.net




wget -O /dev/null https://mirrors.tuna.tsinghua.edu.cn/debian-cd/current/amd64/iso-dvd/debian-12.2.0-amd64-DVD-1.iso

pyenv
https://juejin.cn/post/7056800493753860103
