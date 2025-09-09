import { Component, OnInit } from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stats = [
    { label: 'Employees', value: 120, change: 5, icon: 'group', iconColor: '#007bff', bgColor: '#cce5ff' },
    { label: 'Projects', value: 35, change: -2, icon: 'folder', iconColor: '#28a745', bgColor: '#d4edda' },
    { label: 'Attendance', value: 92, change: 3, icon: 'check_circle', iconColor: '#ffc107', bgColor: '#fff3cd' },
    { label: 'Performance', value: 78, change: 7, icon: 'trending_up', iconColor: '#17a2b8', bgColor: '#d1ecf1' },
  ];



  activities = [
    {
      description: 'John Doe submitted a leave request.',
      time: '2 hours ago',
      icon: 'event',
      iconColor: '#0d6efd',
      bgColor: '#d0e7ff'
    },
    {
      description: 'Jane Smith completed performance review.',
      time: '5 hours ago',
      icon: 'check_circle',
      iconColor: '#198754',
      bgColor: '#d4edda'
    },
    {
      description: 'Mike Johnson updated project status.',
      time: '1 day ago',
      icon: 'update',
      iconColor: '#fd7e14',
      bgColor: '#ffe5d0'
    }
  ];


  employees = [
    {
      name: 'John Doe', email: 'john@example.com', avatar: 'https://i.pravatar.cc/150?img=1',
      department: 'HR', position: 'Manager', status: 'Active', phone: '+1234567890'
    },
    {
      name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://i.pravatar.cc/150?img=2',
      department: 'Finance', position: 'Analyst', status: 'On Leave', phone: '+1234567891'
    },
    {
      name: 'Mike Johnson', email: 'mike@example.com', avatar: 'https://i.pravatar.cc/150?img=3',
      department: 'Development', position: 'Developer', status: 'Inactive', phone: '+1234567892'
    },
  ];

  employeeTableColumn = [
    { code: 'employee', name: 'Employee' },
    { code: 'department', name: 'Department' },
    { code: 'position', name: 'Position' },
    { code: 'status', name: 'Status' },
    { code: 'action', name: 'Action' },
  ]



  constructor() {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip,
      Legend
    );
  }

  ngOnInit(): void {
  }



  ngAfterViewInit() {
    this.createPerformanceChart();
  }

  createPerformanceChart() {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
        datasets: [
          {
            label: 'Performance',
            data: [65, 59, 80, 81, 56, 70, 60, 75, 58],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0,123,255,0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#007bff'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            grid: { display: false }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    const initials = parts.map(p => p[0].toUpperCase());
    return initials.slice(0, 2).join('');
  }
}
