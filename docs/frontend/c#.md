```c#
using System;
using System.Management;

class Program
{
    static void Main()
    {
        // 获取CPU信息
        ManagementObjectSearcher mosCPU = new ManagementObjectSearcher("SELECT * FROM Win32_Processor");
        foreach (ManagementObject moCPU in mosCPU.Get())
        {
            Console.WriteLine("CPU: " + moCPU["Name"]);
            Console.WriteLine("CPU Cores: " + moCPU["NumberOfCores"]);
            Console.WriteLine("CPU Current Speed: " + moCPU["CurrentClockSpeed"] + " MHz");
        }

        // 获取内存信息
        ManagementObjectSearcher mosRam = new ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem");
        foreach (ManagementObject moRam in mosRam.Get())
        {
            Console.WriteLine("Total Physical Memory: " + (Convert.ToDouble(moRam["TotalVisibleMemorySize"]) / 1048576) + " GB");
            Console.WriteLine("Available Physical Memory: " + (Convert.ToDouble(moRam["FreePhysicalMemory"]) / 1048576) + " GB");
        }

        // 获取操作系统信息
        ManagementObjectSearcher mosOS = new ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem");
        foreach (ManagementObject moOS in mosOS.Get())
        {
            Console.WriteLine("Operating System: " + moOS["Caption"] + " " + moOS["Version"]);
        }

        // 获取硬盘信息
        ManagementObjectSearcher mosDisk = new ManagementObjectSearcher("SELECT * FROM Win32_DiskDrive");
        foreach (ManagementObject moDisk in mosDisk.Get())
        {
            Console.WriteLine("Disk Model: " + moDisk["Model"]);
            Console.WriteLine("Disk Size: " + Convert.ToDouble(moDisk["Size"]) / 1000000000 + " GB");
        }

        // 等待用户输入后退出
        Console.WriteLine("\nPress Enter to exit...");
        Console.ReadLine();
    }
}
```
